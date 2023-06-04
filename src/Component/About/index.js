import "./index.scss";
import Header from "../Header";
import WorkEx from "./WorkEx";
import LetsTalk from "./LetsTalk";
import WorkProcess from "./WorkProcess";
import Marquee from "../../CustomComponent/Marquee";
import path from "../../assets/code.jpg";
export default function About() {
  return (
    <>
      <Header />
      <div className="about-me">
        <div className="title">I'm SAJAN and I love clean interfaces.</div>
        <div className="description-box">
          <div className="description-img">
            <img src={path} />
          </div>
          <div className="description">
            I have a passion for creating innovative and intuitive products that
            solve real-world problems. I have a proven track record of
            delivering successful products that delight customers and exceed
            business goals.
          </div>
        </div>
        <Marquee
          className="about-me-heading"
          name={
            <div>
              ReactJS &#183; JAVASCRIPT &#183; TYPESCRIPT &#183; HTML &#183; CSS {" "}
            </div>
          }
          title="TECH STACK"
        />
        <WorkProcess />
        <WorkEx />
        <LetsTalk />
      </div>
    </>
  );
}
