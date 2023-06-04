import React, { useEffect } from "react";
import "./index.scss";

export default function Rating({ min, max, value, onChange }) {
  useEffect(() => {
    const slider_input = document.getElementById("slider_input"),
      slider_thumb = document.getElementById("slider_thumb"),
      slider_line = document.getElementById("slider_line");
    slider_thumb.innerHTML = value;
    const bulletPosition = value / max,
      space = slider_input.offsetWidth - slider_thumb.offsetWidth;

    slider_thumb.style.left = bulletPosition * space + "px";
    slider_line.style.width = (slider_input.value * 100) / max + "%";
  }, []);

  const showSliderValue = (event) => {
    const slider_thumb = document.getElementById("slider_thumb"),
      slider_line = document.getElementById("slider_line");
    const val = event.target.value;
    slider_thumb.innerHTML = val;
    const bulletPosition = val / max,
      space = event.target.offsetWidth - slider_thumb.offsetWidth;

    slider_thumb.style.left = bulletPosition * space + "px";
    slider_line.style.width = (val * 100) / max + "%";
    setTimeout(() => {
      onChange(val);
    });
  };
  return (
    <div class="container">
      <div class="range-slider">
        <div id="slider_thumb" class="range-slider_thumb"></div>
        <div class="range-slider_line">
          <div id="slider_line" class="range-slider_line-fill"></div>
        </div>
        <input
          id="slider_input"
          class="range-slider_input"
          type="range"
          value={value}
          onChange={showSliderValue}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
}
