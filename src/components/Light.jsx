import React from "react";

const Light = () => {
  return (
    <>
      <directionalLight
        position={[1, 1, 1]}
        intensity={2}
      />
      <ambientLight intensity={1} />
    </>
  );
};

export default Light;
