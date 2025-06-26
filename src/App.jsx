import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
 
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    if (search.trim() !== "") {
      fetchWeatherData(search);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  return (
    <div className="app-container">
      <div className="app">
        <h1 className="app-title">Weather Forecast</h1>
        <div className="search-engine">
          <input 
            placeholder="Enter city name" 
            type="text" 
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        ) : weatherData ? (
          <div className="weather-container">
            <div className="location-info">
              <h2 className="city-name">
                {weatherData?.name}, <span className="country">{weatherData?.sys?.country}</span>
              </h2>
              <div className="date">
                <span>{getCurrentDate()}</span>
              </div>
            </div>
            
            <div className="weather-main">
              <div className="temperature">
                <div className="temp-value">{Math.round(weatherData?.main?.temp)}°C</div>
                <div className="temp-feels">
                  Feels like: {Math.round(weatherData?.main?.feels_like)}°C
                </div>
              </div>
              
              <div className="weather-description">
                <img 
                  src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon}@2x.png`} 
                  alt={weatherData.weather?.[0]?.description}
                  className="weather-icon"
                />
                <p className="description">
                  {weatherData.weather?.[0]?.description || ""}
                </p>
              </div>
            </div>
            
            <div className="weather-details">
              <div className="detail-card">
                <i className="fas fa-wind detail-icon"></i>
                <div>
                  <p className="detail-value">{weatherData?.wind?.speed} m/s</p>
                  <p className="detail-label">Wind Speed</p>
                </div>
              </div>
              
              <div className="detail-card">
                <i className="fas fa-tint detail-icon"></i>
                <div>
                  <p className="detail-value">{weatherData?.main?.humidity}%</p>
                  <p className="detail-label">Humidity</p>
                </div>
              </div>
              
              <div className="detail-card">
                <i className="fas fa-temperature-low detail-icon"></i>
                <div>
                  <p className="detail-value">{Math.round(weatherData?.main?.temp_min)}°C</p>
                  <p className="detail-label">Min Temp</p>
                </div>
              </div>
              
              <div className="detail-card">
                <i className="fas fa-temperature-high detail-icon"></i>
                <div>
                  <p className="detail-value">{Math.round(weatherData?.main?.temp_max)}°C</p>
                  <p className="detail-label">Max Temp</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-data">
            <i className="fas fa-cloud-sun"></i>
            <p>No weather data found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App