import "./index.scss";
import socialLink from "../../Constants/socialLink.json";
export default function List() {
  return (
    <ul className="list">
      {socialLink.map((el) => (
        <li>
          <a href={el.link} target="_blank">
            {el.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
