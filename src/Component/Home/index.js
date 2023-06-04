import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Projects from "./Project";
import Heading from "../Header";
import ThreeD from "../../CustomComponent/3D";
import Feedback from "../../CustomComponent/Feedback";

export default function NewHome() {
  return (
    <>
      <Heading className="header" />
      <div className="new-home">
        <ThreeD />
        <Marquee name="SAJAN D CHOUHAN" title="FRONTEND DEVELOPER" />
        <AboutMe />
        <Service />
        <Feedback/>
        {/* <Projects /> */}
      </div>
    </>
  );
}
