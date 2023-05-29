import "./index.scss";
import Heading from "../Heading";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Projects from "./Project";
import Header from "../Header";

export default function NewHome() {
  return (
    <>
      <Header className="header"/>
      <div className="new-home">
        <Heading name="SAJAN D CHOUHAN" title="FRONTEND DEVELOPER" />
        <AboutMe />
        <Service />
        <Projects />
      </div>
    </>
  );
}
