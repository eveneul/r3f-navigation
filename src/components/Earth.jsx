import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Earth = (props) => {
  const earth = useLoader(GLTFLoader, "/models/earth.glb");

  return (
    <mesh {...props}>
      <primitive object={earth.scene} />
    </mesh>
  );
};

export default Earth;
