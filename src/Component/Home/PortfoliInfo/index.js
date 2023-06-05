import "./index.scss";
import List from "../../../CustomComponent/List";
export default function PortfolioInfo() {
  return (
    <div className="portfolio-info">
      <div className="developer-info grey">
        ©Portfolio design and developed by
        <span class="material-symbols-outlined">engineering</span>
        <span className="name">Sajan D Chouhan</span>
      </div>
      <div className="social-link">
        <div className="grey text-align-end">Follow me on socials</div>
        <List />
      </div>
    </div>
  );
}
