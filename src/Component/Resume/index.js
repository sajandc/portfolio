import "./index.scss";
import NewHeader from "../Header";
import resumeJson from "../../Constants/resume.json";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Photo from "../../assets/photo.JPG";
export default function Resume({download}) {
  const {
    img_url,
    name,
    description,
    mail,
    mobile,
    location,
    designation,
    social,
    education,
    projects,
    skills,
  } = resumeJson;

  const returnSocial = () => {
    return social.map((el) => (
      <li>
        <a target="_blank" href={el.link}>
          <img src={el.icon === "linkedin" ? LinkedIn : Github} />
          {el.title}
        </a>
      </li>
    ));
  };

  const returnSkills = () => {
    return skills.map((el) => <div className="skills">{el}</div>);
  };

  const returnEducation = () => {
    return education.map((el) => (
      <div className="eduction-container">
        <div className="font-20 fw-800 margin-b-6">{el.class}</div>
        <div className="font-18 fw-600 margin-b-6">{el.institute}</div>
        <div className="font-14 primary fw-600 margin-b-6">{el.duration}</div>
        <div className="font-14 margin-b-6 fw-600">{el.branch}</div>
        {el.marks ? (
          <div className="font-14 fw-800 primary">{el.marks}</div>
        ) : null}
      </div>
    ));
  };

  const returnProject = () => {
    return projects.map((el) => (
      <div className="projects-container">
        <div className="font-18 fw-600">
          {el.link ? (
            <a target="_blank" href={el.link}>
              {el.title}{" "}
              <span class="material-symbols-outlined font-18">link</span>
            </a>
          ) : (
            el.title
          )}

          <ul>
            {el.description.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };



  return (
    <>
      <div className="resume-container">
        {!download && <NewHeader />}
        <div className={`resume-inner-container ${download ? "download" : ""}`}>
          <div className="content-1">
            <div>
              <img className="image" src={Photo} />
            </div>
            <div>
              <h1>{name}</h1>
              <p className="designation primary fw-600">{designation}</p>
              <p className="description fw-500 font-14">{description}</p>
            </div>
            <div>
              <ul>
                <li>
                  <a href={`mailto:${mail}`}>
                    <span class="material-symbols-outlined">mail</span> {mail}
                  </a>
                </li>
                <li>
                  <a href={`tel:${mobile}`}>
                    <span class="material-symbols-outlined">phone_iphone</span>
                    {mobile}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/PaCqoCedaxZT2hR1A"
                  >
                    <span class="material-symbols-outlined">location_on</span>
                    {location}
                  </a>
                </li>
                {returnSocial()}
              </ul>
            </div>
          </div>
          <Seperator title="SKILLS" icon="psychology" />
          <div className="content-2">{returnSkills()}</div>
          <Seperator title="EDUCATION" icon="school" />
          <div className="content-3">{returnEducation()}</div>
          <Seperator title="PROJECTS WORKED ON" icon="terminal" />
          <div className="content-4">{returnProject()}</div>
        </div>
      </div>
    </>
  );
}

function Seperator({ title, icon }) {
  return (
    <div className="seperator">
      <div className="icon-container">
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <div className="seperator-title">{title}</div>
      <div className="line-container">
        <div className="line"></div>
        <div className="line dark"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
