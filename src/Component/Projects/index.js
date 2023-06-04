import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import Heading from "../Header";

export default function Projects() {
  return (
    <>
      <Heading className="header" />
      <div className="project-container">
        <Marquee name="PROJECTS" title="COMING SOON" />
      </div>
    </>
  );
}
