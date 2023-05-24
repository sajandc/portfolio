import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Title from "../Title";
import CanvasLoader from "../CanvasLoader";

const Computers = ({ isMobile }) => {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      if (window.pageYOffset <= 541) {
        setRotation(window.pageYOffset * 0.3333);
      }
    });
  }, []);
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[200, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 700}
        position={isMobile ? [0, -3, -2.2] : [5, 0.5, -1]}
        rotation={[0, rotation / 60, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");

  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery.matches);

  //   // Define a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   // Add the callback function as a listener for changes to the media query
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <div className="cavnas-cont">
      <Title />
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
