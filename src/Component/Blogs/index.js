import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import Heading from "../Header";

export default function Blogs() {
  return (
    <>
      <Heading className="header" />
      <div className="blogs-container">
        <Marquee name="BLOGS" title="COMING SOON" />
      </div>
    </>
  );
}
