import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getCurrentWeather } from "../utils/weatherAPI";

const Weather = (props) => {
  const { position, weather } = props;
  const glb = useLoader(GLTFLoader, "/models/weather.glb");
  // console.log();

  useEffect(() => {
    getCurrentWeather(44.34, 10.99, import.meta.env.VITE_APP_API_KET);
  }, []);

  return (
    <mesh position={position}>
      <primitive object={glb.nodes[weather]} />
    </mesh>
  );
};

export default Weather;
