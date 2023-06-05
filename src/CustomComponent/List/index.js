import "./index.scss";
import socialLink from "../../Constants/socialLink.json";
import Insta from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
export default function List() {
  const returnImg = (type) => {
    return type === "insta"
      ? Insta
      : type === "twitter"
      ? Twitter
      : type === "youtube"
      ? Youtube
      : type === "github"
      ? Github
      : LinkedIn;
  };

  return (
    <ul className="list">
      {socialLink.map((el) => (
        <li>
          <a href={el.link} target="_blank">
            {el.title} <img src={returnImg(el.icon)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
