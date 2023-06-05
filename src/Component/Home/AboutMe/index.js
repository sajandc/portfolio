import "./index.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../CustomComponent/Button";
import List from "../../../CustomComponent/List";

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
            <Button
              className="lets-talk-btn"
              onClick={onClick}
              text="Let's talk"
              icon="arrow_forward"
            />
          </div>
        </div>
      </div>
      <div className="social-media">
        <div>Follow me:</div>
        <List />
      </div>
    </div>
  );
}
