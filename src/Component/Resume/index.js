import { useEffect, useState } from "react";
import "./index.scss";
import NewHeader from "../Header";
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import SajanPhoto from "../../assets/photo.JPG";
import RupaliPhoto from "../../assets/rupali.jpg";
import { callAPI } from "../../helper/commonFunction";
import { RESUME } from "../../Constants/url";
export default function Resume({ download, path }) {
  const [data, setData] = useState({});
  useEffect(() => {
    callAPI({}, `${RESUME}?name=${path}`, "GET")
      .then((res) => setData(res))
      .catch((error) => console.log("error", error));
  }, []);

  const {
    name = "",
    description = "",
    mail = "",
    mobile = "",
    location = "",
    designation = "",
    social = [],
    education = {},
    skills = {},
    duration = "",
    experience = {},
    rewards = {},
    interests = {},
  } = data;

  const returnSocial = () => {
    return social?.map((el) => (
      <li key={el.title}>
        <a target="_blank" href={el.link}>
          <img src={el.icon === "linkedin" ? LinkedIn : Github} />
          {el.title}
        </a>
      </li>
    ));
  };

  const returnRewards = () => {
    return rewards?.data?.map((el) => (
      <li key={el.title}>
        <div className="font-18 fw-600 margin-b-6">{el.title}</div>
        <div className="font-14 fw-500 margin-b-6 ">{el.description}</div>
      </li>
    ));
  };



  const returnSkills = () => {
    return skills?.data?.map((el) => (
      <div key={el} className="skills">
        {el}
      </div>
    ));
  };

  const returnEducation = () => {
    return education?.data?.map((el) => (
      <div key={el.class} className="eduction-container">
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

  const returnTechStack = (techStack = []) => {
    return techStack.join(", ");
  };

  const returnExperience = () => {
    return experience?.data?.map((el) => (
      <div key={el.link} className="eduction-container">
        <div className="company font-20 fw-800 margin-b-6">
          <a href={el.link}>{el.company}</a>|
          <span className="tech-stack">{returnTechStack(el.tech_stack)}</span>
        </div>
        <div className="font-18 fw-600 margin-b-6">{el.designation}</div>
        <div className="font-14 primary fw-600 margin-b-6">{el.duration}</div>
        <ul className="project-wrapper">{returnProject(el.projects)}</ul>
      </div>
    ));
  };

  const returnInterests = () => {
    return interests?.data?.map((el) => <div className="interests">{el}</div>);
  };

  const returnProject = (projects = []) => {
    return projects?.map((el) => (
      <li key={el.title} className="projects-container">
        <div className="font-18 fw-600">
          <div className="project-name">
            <span class="material-symbols-outlined">terminal</span>
            <span>
              {el.link ? (
                <a target="_blank" href={el.link}>
                  {el.title}{" "}
                  <span class="material-symbols-outlined font-18 margin-l-6">
                    link
                  </span>
                </a>
              ) : (
                el.title
              )}
            </span>
          </div>

          <ul>
            {el.description.map((e) => (
              <li> {e}</li>
            ))}
          </ul>
        </div>
      </li>
    ));
  };

  return (
    <>
      <div className="resume-container">
        {!download && <NewHeader />}
        <div className={`resume-inner-container ${download ? "download" : ""}`}>
          <div className="content-1">
            <div>
              <img className="image" src={path === "sajan" ? SajanPhoto : RupaliPhoto} />
            </div>
            <div>
              <h1>
                <span className="fw-500">{name.split(" ")[0]} </span>
                <span className="fw-800">{name.split(" ")[1]}</span>
              </h1>
              <p className="designation primary fw-600">{designation}</p>
              <p className="designation primary fw-600">{duration}</p>
              {download && (
                <a
                  className="portfolio-link primary"
                  target="_blank"
                  href="https://sajan.co.in">
                  <span class="material-symbols-outlined">captive_portal</span>
                  sajan.co.in
                </a>
              )}
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
                    href="https://goo.gl/maps/PaCqoCedaxZT2hR1A">
                    <span class="material-symbols-outlined">location_on</span>
                    {location}
                  </a>
                </li>
                {returnSocial()}
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div>
              <Seperator title={experience.title} icon={experience.icon} />
              <div className="content-3">{returnExperience()}</div>
            </div>
            <div>
              <Seperator title={skills.title} icon={skills.icon} />
              <div className="content-2">{returnSkills()}</div>
              {rewards.title && (
                <>
                  <Seperator title={rewards.title} icon={rewards.icon} />
                  <div className="content-3">
                    {<ul className="rewards">{returnRewards()}</ul>}
                  </div>{" "}
                </>
              )}
              <Seperator title={education.title} icon={education.icon} />
              <div className="content-3">{returnEducation()}</div>
              <Seperator title={interests.title} icon={interests.icon} />
              <div className="content-3">{returnInterests()}</div>
            </div>
          </div>
        </div>
        {!download && (
          <a href={`./${path}_resume.pdf`} className="download-resume" download>
            <div>Download</div>
            <span class="material-symbols-outlined">download</span>
          </a>
        )}
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
