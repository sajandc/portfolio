import "./index.scss";
export default function Stepper() {
  return (
    <div className="stepper-wrapper">
      <div className="steps">
        <div className="step-title">
          <span class="material-symbols-outlined">quick_reference_all</span>
          Research
        </div>
        <div className="step-description">
          I begins her system design process with thorough research and
          discovery. I takes the time to understand my clients' requirements,
          goals, and target audience. I also conducts research on the industry,
          competitors, and current design trends to gather inspiration and
          insights.
        </div>
      </div>
      <div className="steps">
        <div className="step-title">
          <span class="material-symbols-outlined">view_timeline</span>
          Conceptualization
        </div>
        <div className="step-description">
          Based on my research findings, I moves on to the conceptualization and
          ideation phase. I generates multiple concepts and brainstorm ideas,
          prototyping my ideas to bring them to life. Then I experiments with
          different design elements, such as color palettes, typography,
          layouts, and imagery, to explore various design directions.
        </div>
      </div>
      <div className="steps">
        <div className="step-title">
          <span class="material-symbols-outlined">deployed_code</span>
          Development
        </div>
        <div className="step-description">
          Once the design direction is finalized, Then I begins the development
          phase. I use my expertise to implement the best coding practices in
          developing the clean design.
        </div>
      </div>
      <div className="steps">
        <div className="step-title">
          <span class="material-symbols-outlined">preliminary</span>
          Delivery and Launch
        </div>
        <div className="step-description">
          finally I conduct quality checks to ensure that the development is as
          per design and is consistent across all platforms or mediums. Once the
          feature is launched or delivered to the client, I follows up to gather
          feedback and make any post-launch adjustments as needed.
        </div>
      </div>
    </div>
  );
}
