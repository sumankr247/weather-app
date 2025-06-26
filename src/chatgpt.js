// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [weatherData, setWeatherData] = useState(null);

//   async function fetchWeatherData(param) {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&units=metric`
//       );
//       const data = await response.json();
//       if (data) {
//         setWeatherData(data);
//         setLoading(false);
//       }
//     } catch (e) {
//       setLoading(false);
//       console.log(e);
//     }
//   }

//   function handleSearch() {
//     if (search.trim() !== "") {
//       fetchWeatherData(search);
//     }
//   }

//   function getCurrentDate() {
//     return new Date().toLocaleDateString("en-us", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });
//   }

//   useEffect(() => {
//     fetchWeatherData("bangalore");
//   }, []);

//   return (
//     <div className="App">
//       <div className="search-engine">
//         <input
//           type="text"
//           placeholder="Enter City Name"
//           name="search"
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : weatherData ? (
//         <div className="weather-container">
//           <div className="city-name">
//             <h2>
//               {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
//             </h2>
//           </div>
//           <div className="date">
//             <span>{getCurrentDate()}</span>
//           </div>
//           <div className="temp">{weatherData?.main?.temp}°C</div>
//           <p className="description">
//             {weatherData.weather?.[0]?.description || ""}
//           </p>
//           <div className="weather-info">
//             <div className="column">
//               <p className="wind">{weatherData?.wind?.speed} m/s</p>
//               <p>Wind Speed</p>
//             </div>
//             <div className="column">
//               <p className="humidity">{weatherData?.main?.humidity}%</p>
//               <p>Humidity</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>No data found.</p>
//       )}
//     </div>
//   );
// }

// export default App;
