import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Projects from "./Project";
import Heading from "../Header";

export default function NewHome() {
  return (
    <>
      <Heading className="header" />
      <div className="new-home">
        <Marquee name="SAJAN D CHOUHAN" title="FRONTEND DEVELOPER" />
        <AboutMe />
        <Service />
        {/* <Projects /> */}
      </div>
    </>
  );
}
