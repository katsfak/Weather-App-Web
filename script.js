const apiKey = "1f9089035c46fc63c3660fa14ea7daff";
let isCelsius = true;
let currentWeatherData = null;
let debounceTimer = null;

// Temperature conversion utilities
function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin - 273.15) * 9/5 + 32);
}

function convertTemperature(kelvin) {
  return isCelsius ? kelvinToCelsius(kelvin) : kelvinToFahrenheit(kelvin);
}

function getUnitSymbol() {
  return isCelsius ? '°C' : '°F';
}

// Show/Hide loading state
function showLoading() {
  document.getElementById("loading").style.display = "block";
  document.getElementById("weather-data").style.display = "none";
}

function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

// Geocoding function
async function getLonAndLat(query) {
  const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=1&appid=${apiKey}`;
  
  try {
    const geocodeRes = await fetch(geocodeURL);
    if (!geocodeRes.ok) {
      throw new Error(`Geocoding API error: ${geocodeRes.status}`);
    }
    
    const geocodeData = await geocodeRes.json();
    if (!geocodeData || geocodeData.length === 0) {
      return null;
    }
    
    return geocodeData[0];
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
}

// Autocomplete suggestions
async function showSuggestions(query) {
  if (!query || query.length < 2) {
    document.getElementById("location-suggestion").textContent = "";
    return;
  }

  const location = await getLonAndLat(query);
  const suggestionEl = document.getElementById("location-suggestion");
  
  if (location) {
    const { name, state, country } = location;
    let suggestionText = `📍 ${name}`;
    if (state) suggestionText += `, ${state}`;
    suggestionText += `, ${country}`;
    suggestionEl.textContent = suggestionText;
  } else {
    suggestionEl.textContent = "";
  }
}

// Display weather data
function displayWeatherData(data) {
  const weatherDataSection = document.getElementById("weather-data");
  const { name, main, weather, wind, sys } = data;
  
  currentWeatherData = data;
  
  const temp = convertTemperature(main.temp);
  const feelsLike = convertTemperature(main.feels_like);
  const unit = getUnitSymbol();
  
  weatherDataSection.innerHTML = `
    <div class="weather-icon-container">
      <img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" 
           alt="${weather[0].description}" />
    </div>
    <h2 class="city-name">${name}, ${sys.country}</h2>
    <div class="temperature">${temp}${unit}</div>
    <p class="description">${weather[0].description}</p>
    
    <div class="weather-details">
      <div class="detail-item">
        <span class="detail-label">Feels Like</span>
        <span class="detail-value">${feelsLike}${unit}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Humidity</span>
        <span class="detail-value">${main.humidity}%</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Wind Speed</span>
        <span class="detail-value">${Math.round(wind.speed * 3.6)} km/h</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Pressure</span>
        <span class="detail-value">${main.pressure} hPa</span>
      </div>
    </div>
  `;
  
  weatherDataSection.style.display = "block";
  hideLoading();
}

// Error display
function displayError(message, query = "") {
  const weatherDataSection = document.getElementById("weather-data");
  
  weatherDataSection.innerHTML = `
    <div class="error-message">
      <h2>❌ ${message}</h2>
      ${query ? `<p>Could not find weather data for "<strong>${query}</strong>"</p>` : ""}
      <p>Please try again with a valid city name.</p>
    </div>
  `;
  
  weatherDataSection.style.display = "block";
  hideLoading();
}

// Main fetch weather function
async function fetchWeather() {
  const searchInput = document.getElementById("search").value.trim();
  const weatherDataSection = document.getElementById("weather-data");
  
  if (!searchInput) {
    displayError("Empty Input!");
    return;
  }

  showLoading();
  document.getElementById("location-suggestion").textContent = "";

  const location = await getLonAndLat(searchInput);
  
  if (!location) {
    displayError("Invalid Input", searchInput);
    return;
  }

  const { lat, lon } = location;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
    const weatherRes = await fetch(weatherURL);
    
    if (!weatherRes.ok) {
      throw new Error(`Weather API error: ${weatherRes.status}`);
    }

    const weatherData = await weatherRes.json();
    displayWeatherData(weatherData);
    document.getElementById("search").value = "";
    
    // Save to localStorage
    localStorage.setItem("lastCity", searchInput);
  } catch (error) {
    console.error("Weather fetch error:", error);
    displayError("Failed to fetch weather data");
  }
}

// Geolocation feature
async function fetchWeatherByLocation() {
  if (!navigator.geolocation) {
    displayError("Geolocation is not supported by your browser");
    return;
  }

  showLoading();

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      try {
        const weatherRes = await fetch(weatherURL);
        
        if (!weatherRes.ok) {
          throw new Error(`Weather API error: ${weatherRes.status}`);
        }

        const weatherData = await weatherRes.json();
        displayWeatherData(weatherData);
      } catch (error) {
        console.error("Weather fetch error:", error);
        displayError("Failed to fetch weather data for your location");
      }
    },
    (error) => {
      console.error("Geolocation error:", error);
      displayError("Unable to retrieve your location");
      hideLoading();
    }
  );
}

// Update display when unit is toggled
function updateTemperatureDisplay() {
  if (currentWeatherData) {
    displayWeatherData(currentWeatherData);
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submit");
  const searchEl = document.getElementById("search");
  const locationBtn = document.getElementById("location-btn");
  const unitToggle = document.getElementById("unit-toggle");

  // Load saved preferences
  const savedUnit = localStorage.getItem("temperatureUnit");
  if (savedUnit === "fahrenheit") {
    isCelsius = false;
    unitToggle.checked = true;
  }

  // Search button
  if (btn) {
    btn.addEventListener("click", fetchWeather);
  }

  // Enter key support
  if (searchEl) {
    searchEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        fetchWeather();
      }
    });

    // Autocomplete while typing
    searchEl.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        showSuggestions(e.target.value.trim());
      }, 500);
    });
  }

  // Geolocation button
  if (locationBtn) {
    locationBtn.addEventListener("click", fetchWeatherByLocation);
  }

  // Unit toggle
  if (unitToggle) {
    unitToggle.addEventListener("change", (e) => {
      isCelsius = !e.target.checked;
      localStorage.setItem("temperatureUnit", isCelsius ? "celsius" : "fahrenheit");
      updateTemperatureDisplay();
    });
  }

  // Load last searched city
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    searchEl.value = lastCity;
  }
});