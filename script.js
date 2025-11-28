async function fetchWeather() {
  const searchInput = document.getElementById("search").value.trim();
  const weatherDataSection = document.getElementById("weather-data");
  weatherDataSection.style.display = "block";
  const apiKey = "1f9089035c46fc63c3660fa14ea7daff";

  if (!searchInput) {
    weatherDataSection.innerHTML = `
    <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u>city name</u>.</p>
    </div>
    `;
    return;
  }

  async function getLonAndLat(query) {
    const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=1&appid=${apiKey}`;
    const geocodeRes = await fetch(geocodeURL);
    if (!geocodeRes.ok) {
      console.log("Bad response from geocoding API: ", geocodeRes.status);
      return null;
    }
    const geocodeData = await geocodeRes.json();
    if (!geocodeData || geocodeData.length === 0) {
      console.log("No geocoding results for", query);
      weatherDataSection.innerHTML = `<div>
        <h2>Invalid Input: "${query}"</h2>
        <p>Please try again with a valid <u>city name</u>.</p></div>
    `;
      return null;
    }
    return geocodeData[0];
  }

  const location = await getLonAndLat(searchInput);
  if (!location) return;

  const { lat, lon } = location;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const weatherRes = await fetch(weatherURL);
  if (!weatherRes.ok) {
    console.log("Bad response from weather API: ", weatherRes.status);
    return;
  }

  const weatherData = await weatherRes.json();
  weatherDataSection.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="${weatherData.weather[0].description}" width="100" /><div><h2>${weatherData.name}</h2><p><strong>Temperature:</strong> ${Math.round(weatherData.main.temp - 273.15)}°C</p><p><strong>Description:</strong> ${weatherData.weather[0].description}</p>
  </div>`;
  document.getElementById("search").value = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submit");
  const searchEl = document.getElementById("search");
  if (btn) btn.addEventListener("click", fetchWeather);

  // trigger the button when user presses Enter in the input
  if (searchEl) {
    searchEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        // simulate a button press so existing onclick handlers run
        const btnToClick = btn || document.querySelector('#submit');
        if (btnToClick) btnToClick.click();
        else fetchWeather();
      }
    });
  }
});