export const getCurrentWeather = (lat, lon, key) => {
  // lat: 위도, lon: 경도

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error", error));
};
