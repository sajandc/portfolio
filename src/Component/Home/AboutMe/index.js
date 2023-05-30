import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/contact");
  };

  return (
    <div className="short-about-me">
      <div className="content">
        <div className="name">Hi, I'm SAJAN</div>
        <div className="description">
          A frontend developer with a focus on creating highly polished generice
          user interface. I have over 5 years of experience in doing that.
        </div>
        <div className="work-together">
          Let’s <div className="work">work</div>
          <div className="together">
            together
            <button onClick={onClick} className="button">
              <span>Let's talk </span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="social-media">
        <div>Follow me:</div>
        <ul className="list">
          <li>
            <a
              href="https://www.linkedin.com/in/sajandchouhan/"
              target="_blank"
            >
              LinkendIn
            </a>
          </li>
          <li>
            <a href="https://github.com/sajandc" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/iam_SajanDC" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sajan.d.chouhan/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC9l0BBYYB0BxMOta-e5q60g"
              target="_blank"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
