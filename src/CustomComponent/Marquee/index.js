import React from "react";
import "./heading.scss";

export default function Heading({name, title, className}) {
  return (
    <section className={`marquees-wrapper ${className}`}>
      <div className="marquee marquee-1">
        <ul className="marquee__content scroll">
          <li>{name}</li>
          <li>&#183;</li>
          <li className="light">{title}</li>
          <li>&#183;</li>
        </ul>
        <ul className="marquee__content scroll" aria-hidden="true">
          <li>{name}</li>
          <li>&#183;</li>
          <li className="light">{title}</li>
          <li>&#183;</li>
        </ul>
      </div>
    </section>
  );
}
