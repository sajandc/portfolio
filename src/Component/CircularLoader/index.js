import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./loader.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-loader">
      <Lottie
        options={defaultOptions}
        height={600}
        width={600}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
}
