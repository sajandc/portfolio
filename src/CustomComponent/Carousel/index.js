import React, { useState } from "react";
import "./index.scss";

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel">
      <span
        onClick={() => setCurrentIndex(currentIndex - 1)}
        class={`material-symbols-outlined font-4 ${currentIndex ? "" : "hide"}`}
      >
        navigate_before
      </span>
      <div className="carousel-data-container">
        <div
          style={{ transform: `translateX(-${currentIndex * 70}vw)` }}
          className="carousel-inner-container"
        >
          {data.map((el, i) => (
            <div className={`steps ${currentIndex === i ? "active" : ""}`}>
              <div>
                <div className="step-title">
                  <span class="material-symbols-outlined">{el.icon}</span>
                  {el.title}
                </div>
                <div className="step-description">{el.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span
        onClick={() => setCurrentIndex(currentIndex + 1)}
        class={`material-symbols-outlined font-4 ${
          currentIndex < data.length - 1 ? "" : "hide"
        }`}
      >
        navigate_next
      </span>
    </div>
  );
}
