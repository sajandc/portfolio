import React, { useEffect } from "react";
import "./index.scss";

export default function Rating({ min, max, value, onChange, id }) {
  useEffect(() => {
    const slider_input = document.getElementById(id),
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
    event.stopPropagation();
    event.preventDefault()
    setTimeout(() => {
      onChange(val);
    });
  };
  return (
    <div className="container">
      <div className="range-slider">
        <div id="slider_thumb" className="range-slider_thumb"></div>
        <div className="range-slider_line">
          <div id="slider_line" className="range-slider_line-fill"></div>
        </div>
        <input
          id={id}
          className="range-slider_input"
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
