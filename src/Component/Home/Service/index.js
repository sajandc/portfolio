import "./index.scss";

export default function Service() {
  return (
    <div className="service">
      <div className="title">
        I provide high-quality services:{" "}
        <span className="material-symbols-outlined ">double_arrow</span>{" "}
        <a className="view-detail" href="/#/about">view in detail</a>
      </div>
      <ul className="items">
        <li>Mobile Web Development</li>
        <li>Generic UI Components</li>
        <li>Web Dashboard</li>
        <li>Deisgn System</li>
      </ul>
    </div>
  );
}
