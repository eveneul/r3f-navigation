import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getCityWeather, getCurrentWeather } from "../utils/weatherAPI";
import { cities } from "../utils/cities";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_APP_API_KET;

const Weather = (props) => {
  const { position, weather } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");

  const [cityWeather, setCityWeather] = useState();

  // console.log();

  const getCitiesWeather = () => {
    const weatherData = cities.map((city) => {
      return getCityWeather(city, API_KEY);
    });

    Promise.all(weatherData)
      .then((data) => setCityWeather(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCitiesWeather();
  }, []);

  useEffect(() => {
    console.log(cityWeather);
  }, [cityWeather]);

  return (
    <mesh position={position}>
      <primitive object={glb.nodes[weather]} />
    </mesh>
  );
};

export default Weather;
