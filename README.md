# 🌤️ Weather App Web

A beautiful and responsive weather application that provides real-time weather information for any city around the world. Built with vanilla JavaScript and powered by the OpenWeatherMap API.

![Weather App](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- 🔍 **Smart City Search** - Search for weather information by city name
- 🌍 **Global Coverage** - Get weather data for cities worldwide
- 📍 **Geocoding Support** - Automatically converts city names to coordinates
- 🎨 **Beautiful UI** - Clean, modern interface with a stunning background
- 📱 **Responsive Design** - Works seamlessly on different screen sizes
- ⌨️ **Keyboard Support** - Press Enter to search quickly
- ⚡ **Real-time Data** - Up-to-date weather information
- 🖼️ **Weather Icons** - Visual weather condition indicators
- 🌡️ **Detailed Information** - Temperature, humidity, wind speed, and conditions

## 🚀 Live Demo

Visit the live application:  [Weather App Web](https://katsfak.github.io/Weather-App-Web/)

## 📸 Screenshots

![Weather App Interface](https://via.placeholder.com/800x400/E3C1AD/333333?text=Weather+App+Interface)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox and custom properties
- **JavaScript (ES6+)** - Async/await, Fetch API
- **OpenWeatherMap API** - Weather data provider
  - Current Weather Data API
  - Geocoding API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/katsfak/Weather-App-Web. git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Weather-App-Web
   ```

3. **Open the application**
   - Simply open `index.html` in your web browser
  

4. **Access the app**
   - Open your browser and navigate to `http://localhost:8000`

## 🔑 API Key Configuration

The app uses the OpenWeatherMap API.  The current implementation includes an API key, but for production use: 

1. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `script.js`:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

## 💻 Usage

1. **Search for a City**
   - Type the name of any city in the search box
   - Click the "Search" button or press Enter

2. **View Weather Information**
   - Current temperature (in Kelvin)
   - Weather condition description
   - Weather icon representing current conditions
   - Humidity percentage
   - Wind speed

3. **Error Handling**
   - Empty input validation
   - Invalid city name feedback
   - User-friendly error messages

## 📁 Project Structure

```
Weather-App-Web/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and layout
├── script.js           # Application logic and API calls
└── README.md          # Project documentation
```

## 🎯 Key Functions

### `fetchWeather()`
Main function that:
- Validates user input
- Calls geocoding API to get coordinates
- Fetches weather data based on coordinates
- Displays formatted weather information

### `getLonAndLat(query)`
Helper function that:
- Converts city names to latitude/longitude coordinates
- Handles geocoding errors
- Validates location data

## 🎨 Styling Features

- **Semi-transparent overlay** for better readability
- **Rounded corners** for modern aesthetics
- **Flexbox layout** for responsive positioning
- **Custom background image** with full coverage
- **Hover effects** for interactive elements
- **Smooth transitions** for better UX

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🔮 Future Enhancements

- [ ] Add temperature unit conversion (Celsius/Fahrenheit)
- [ ] 5-day weather forecast
- [ ] Location autocomplete suggestions
- [ ] Geolocation support (current location)
- [ ] Weather alerts and warnings
- [ ] Favorite cities list
- [ ] Dark/Light theme toggle
- [ ] Historical weather data
- [ ] Weather maps integration
- [ ] Progressive Web App (PWA) support

## 🐛 Known Issues

- Temperature is displayed in Kelvin (conversion feature pending)
- Limited error messaging for API failures
- No loading state indicator

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

## 📞 Support

If you have any questions or run into issues, please open an issue on the [GitHub repository](https://github.com/katsfak/Weather-App-Web/issues).

---

⭐ **If you found this project helpful, please consider giving it a star! ** ⭐

Made with ❤️ by katsfak
