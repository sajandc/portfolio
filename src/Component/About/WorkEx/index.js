import workEx from "../../../Constants/workEx.json";
export default function WorkEx() {
  return (
    <div className="work-ex">
      <h1>Work Experience </h1>
      <ul>
        {workEx.map((el) => (
          <li>
            <div>
              {el.designation}
              <span className="light">{el.company}</span>
            </div>
            <div className="light">{el.duration}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
