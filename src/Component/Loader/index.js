import React, { useState, useEffect } from "react";
import "./index.scss";
export default function Loader() {
  const text = [
    "Hello",
    "Bonjour",
    "Hola",
    "नमस्ते",
    "Salve",
    "Shalom",
    "Yassas",
    "Merhaba",
  ];

  const time = 180;
  const [show, setShow] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  let timeInterval = null;
  let timeOut = null;
  useEffect(() => {
    timeInterval = setInterval(() => {
      setTextIndex((textIndex) => textIndex + 1);
    }, time);

    timeOut = setTimeout(() => {
      setShow(false);
      clearInterval(timeInterval);
    }, time * text.length);
    return () => {
      clearInterval(timeInterval);
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div className={`loader ${show ? "show" : "hide"}`}>{text[textIndex]}</div>
  );
}
