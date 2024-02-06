import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import Light from "./Light";
import Weather from "./Weather";

export default function Scene() {
  const canvasProps = {
    camera: {
      position: [0, 1, 3],
    },
  };

  return (
    <Canvas {...canvasProps}>
      <color
        attach={"background"}
        args={["rgb(67, 127, 240)"]}
      />
      <OrbitControls enableDamping />
      <Light />
      <Earth position={[0, -2, 0]} />
      <Weather
        weather="clear"
        position={[-2, 0, 0]}
      />
      <Weather
        weather="cloud"
        position={[-1, 0, 0]}
      />
      <Weather
        weather="clouds"
        position={[0, 0, 0]}
      />
      <Weather
        weather="mist"
        position={[1, 0, 0]}
      />
      <Weather
        weather="rain"
        position={[2, 0, 0]}
      />
      <Weather
        weather="rain2"
        position={[0, 1, 0]}
      />
      <Weather
        weather="snow"
        position={[0, 2, 0]}
      />
    </Canvas>
  );
}
