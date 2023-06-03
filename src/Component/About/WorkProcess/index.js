// import Stepper from "../../../CustomComponent/Stepper";
import workprocess from "../../../Constants/workprocess.json";
import Carousel from "../../../CustomComponent/Carousel";
export default function WorkProcess() {
  return (
    <div className="work-process">
      <h3>How I work ?</h3>
      <h1>My process is pretty spectacular</h1>
      <div className="description">
        My development process is iterative and adaptable, allowing me to
        incorporate feedback, learn from each project, and continuously improve
        my work.
      </div>
      <Carousel data={workprocess}/>
      {/* <Stepper /> */}
    </div>
  );
}
