import "./index.scss";
import services from "../../../Constants/services.json";

export default function Service() {
  return (
    <div className="service">
      <div className="title">
        I provide high-quality services:{" "}
        <span className="material-symbols-outlined ">double_arrow</span>{" "}
        <a className="view-detail" href="/#/about">
          view in detail
        </a>
      </div>
      <ul className="items">
        {services.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
