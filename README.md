# 🌤️ Weather App Web

A beautiful and feature-rich weather application that provides real-time weather information for any city around the world. Built with vanilla JavaScript and powered by the OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- 🔍 **Smart City Search** - Search for weather information by city name with autocomplete suggestions
- 🌍 **Global Coverage** - Get weather data for cities worldwide
- 📍 **Geolocation Support** - Automatically fetch weather for your current location
- 🌡️ **Temperature Units** - Toggle between Celsius and Fahrenheit
- 🎨 **Beautiful UI** - Modern, responsive interface with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Support** - Press Enter to search quickly
- ⚡ **Real-time Data** - Up-to-date weather information
- 🖼️ **Weather Icons** - Beautiful visual weather condition indicators
- 📊 **Detailed Information** - Temperature, feels like, humidity, wind speed, pressure
- 💾 **Local Storage** - Remembers your last search and unit preference
- 🔄 **Loading States** - Visual feedback during data fetching
- ❌ **Error Handling** - User-friendly error messages

## 🚀 Live Demo

Visit the live application: [Weather App Web](https://katsfak.github.io/Weather-App-Web/)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Grid, Flexbox, animations, and gradients
- **JavaScript (ES6+)** - Async/await, Fetch API, Local Storage, Geolocation API
- **OpenWeatherMap API** - Weather data provider
  - Current Weather Data API
  - Geocoding API

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/katsfak/Weather-App-Web.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Weather-App-Web
   ```

3. **Open the application**

   - Simply open `index.html` in your web browser
   - Or use a local server:

     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js with http-server
     npx http-server
     ```

4. **Access the app**
   - Open your browser and navigate to the local server address

## 🔑 API Key Configuration

The app uses the OpenWeatherMap API. The current implementation includes an API key, but for production use:

1. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `script.js`:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

## 💻 Usage

### Search for Weather

1. **By City Name**

   - Type the name of any city in the search box
   - See autocomplete suggestions as you type
   - Click "Search" or press Enter

2. **By Current Location**
   - Click the 📍 location button
   - Allow location access when prompted
   - Weather data for your location will be displayed

### View Weather Information

- Current temperature (Celsius/Fahrenheit)
- Feels like temperature
- Weather condition with description and icon
- Humidity percentage
- Wind speed (km/h)
- Atmospheric pressure

### Toggle Temperature Units

- Use the toggle switch to switch between °C and °F
- Your preference is saved automatically

## 📁 Project Structure

```
Weather-App-Web/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling, animations, and responsive design
├── script.js           # Application logic, API calls, and features
└── README.md           # Project documentation
```

## 🎯 Key Functions

### Core Functions

**`fetchWeather()`**

- Validates user input
- Calls geocoding API to get coordinates
- Fetches weather data based on coordinates
- Displays formatted weather information with all details

**`fetchWeatherByLocation()`**

- Uses Geolocation API to get user's coordinates
- Fetches weather data for current location
- Handles permission and error states

**`getLonAndLat(query)`**

- Converts city names to latitude/longitude coordinates
- Handles geocoding errors
- Validates location data

### Utility Functions

**`convertTemperature(kelvin)`**

- Converts temperature based on current unit preference
- Supports Celsius and Fahrenheit

**`showSuggestions(query)`**

- Provides autocomplete suggestions while typing
- Debounced to prevent excessive API calls

**`displayWeatherData(data)`**

- Renders weather information with proper formatting
- Updates display when units are changed

## 🎨 Styling Features

- **Modern glassmorphism** design with backdrop filters
- **Smooth animations** for all interactions
- **Loading spinner** for better UX
- **Gradient backgrounds** for buttons and cards
- **Responsive grid layout** for weather details
- **Hover effects** with subtle transforms
- **Custom toggle switch** for unit selection
- **Mobile-optimized** touch targets

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Required Features:**

- ES6+ JavaScript support
- Fetch API
- Local Storage
- Geolocation API (optional)

## ✅ Implemented Features

- ✅ Temperature unit conversion (Celsius/Fahrenheit)
- ✅ Loading state indicators
- ✅ Location autocomplete suggestions
- ✅ Geolocation support (current location)
- ✅ Detailed weather data display
- ✅ Local storage for preferences
- ✅ Modern animations and transitions
- ✅ Fully responsive design
- ✅ Enhanced error handling

## 🔮 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Hourly forecast
- [ ] Weather alerts and warnings
- [ ] Favorite cities list with quick access
- [ ] Dark/Light theme toggle
- [ ] Historical weather data
- [ ] Weather maps integration
- [ ] Air quality index
- [ ] UV index information
- [ ] Progressive Web App (PWA) support
- [ ] Multiple language support

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aikaterini Eirini Sfakianou**

- GitHub: [@katsfak](https://github.com/katsfak)
- Email: katsfak12@gmail.com

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- Weather icons provided by OpenWeatherMap
- Background image from external source
- Inspired by modern weather app designs

## 📞 Support

If you have any questions or run into issues, please open an issue on the [GitHub repository](https://github.com/katsfak/Weather-App-Web/issues).

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐

Made with ❤️ by katsfak
