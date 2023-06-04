import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "./3Dloader";
// import { isMobile } from "../../helper/commonFunction";
import "./index.scss";
import Model from "./model";

const ThreeDModel = () => {
  const [rotation, setRotation] = useState(0);
  //   useEffect(() => {
  //     document.addEventListener("scroll", (event) => {
  //       if (window.pageYOffset <= 541) {
  //         setRotation(window.pageYOffset * 0.3333);
  //       }
  //     });
  //   }, []);

  //   const { nodes, animations, scene } = useGLTF("./lose-the-moose/scene.gltf");
  //   const { ref, actions, names } = useAnimations(animations);

  //   useEffect(() => {
  //     console.log("dcsdcs",actions['WalkForward'], actions, actions.Backing)
  //     // Reset and fade in animation after an index has been changed
  //     actions[names[0]].fadeIn(0.5).play()
  //     // In the clean-up phase, fade it out
  //     return () => actions["WalkForward"].fadeOut(0.5);
  //   }, []);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[200, 100, 50]}
        angle={10}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <Model />

      {/* <primitive
        // object={nodes.mixamorigHips}
        object={scene}
        scale={3}
        position={[0, -3.3, 0]}
        rotation={[0, 0, 0]}
      /> */}
    </mesh>
  );
};

const ThreeDCanvas = () => {
  return (
    <div className="cavnas-cont">
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
          <ThreeDModel />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ThreeDCanvas;
