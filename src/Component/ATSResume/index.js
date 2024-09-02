import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// STYLES
import "./index.scss";

// COMPONENT
import NewHeader from "../Header";
import Loader from "../CircularLoader";

// HELPERS
import { callAPI } from "../../helper/commonFunction";

// URLS
import { RESUME } from "../../Constants/url";

export default function ATSResume({}) {
  const { name, type } = useParams();
  const download = type === "download";
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    callAPI({}, `${RESUME}?name=${name}`, "GET")
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const {
    name: n = "",
    description = "",
    mail = "",
    mobile = "",
    location: lc = "",
    designation = "",
    social = [],
    education = {},
    skills = [],
    duration = "",
    experience = {},
    rewards = {},
    interests = {},
    link = "",
  } = data;

  const returnSocial = () => {
    return social?.map((el) => (
      <div className="flex-vertical-center font-18 margin-t-8">
        <span className="margin-r-5">{el.title}:</span>
        <span>
          <a
            target="_blank"
            className="font-20 primary-color font-18"
            href={el.link}>
            {el.text}
          </a>
        </span>
      </div>
    ));
  };

  const returnRewards = () => {
    return rewards?.data?.map((el) => (
      <div key={el.title}>
        <div className="font-18 fw-600">{el.title}</div>
        <ul>
          <li className="font-16 fw-500 margin-t-10">{el.description}</li>
        </ul>
      </div>
    ));
  };

  const returnSkills = () => {
    return skills?.map((category) => (
      <div key={Object.keys(category)[0]} className="skills-category">
        <div className="font-18 fw-600">{Object.keys(category)[0]}</div>
        <ul>
          {category[Object.keys(category)[0]].map((skill) => (
            <li key={skill.title} className="margin-t-6">
              <span className="fw-600">{skill.title}:</span> {skill.description}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const returnEducation = () => {
    return education?.data?.map((el) => (
      <>
        <div className="space-between">
          <div className="fw-600 font-18 primary-color">{el.institute}</div>
          <div className="font-16 fw-500">{el.location}</div>
        </div>
        <div className="space-between margin-t-4">
          <div>
            {el.class}{" "}
            {el.marks && (
              <>
                , <span className="fw-600">{el.marks}</span>
              </>
            )}
          </div>
          <div className="margin-b-16">{el.duration}</div>
        </div>
      </>
    ));
  };

  const returnProject = (projects = []) => {
    return experience?.data?.map((el) =>
      el.projects.map((e) => (
        <div key={el.title} className="">
          <div className="font-18 fw-600">
            <div className="project-name">
              <span>
                {e.link ? (
                  <a className="primary-color" target="_blank" href={e.link}>
                    {e.title}{" "}
                  </a>
                ) : (
                  e.title
                )}
              </span>
            </div>

            <ul className="font-16 fw-500">
              {e.description.map((d) => (
                <li className="margin-t-10"> {d}</li>
              ))}
            </ul>
          </div>
        </div>
      ))
    );
  };

  const workExperience = () => {
    return experience?.data?.map((el) => (
      <div>
        <div className="space-between">
          <div className="fw-600 font-20">
            {el.designation} @ {el.company}
          </div>
          <div className="fw-600">{el.duration}</div>
        </div>
        <ul>
          {el.description.map((e) => (
            <li className="margin-t-10 font-16 fw-500">{e}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="ats-resume-container">
        {!download && <NewHeader />}
        <div
          className={`ats-resume-inner-container ${
            download ? "download" : ""
          }`}>
          {/* HEADING */}
          <div className="ats-resume-heading border-b padding-b-24">
            <div>
              <div className="flex-vertical-center fw-800 font-30">
                {n}{" "}
                {!download && (
                  <a
                    target="_blank"
                    className="no-underline primary-color"
                    href={link}>
                    <span className="material-symbols-outlined font-24 margin-l-6">
                      link
                    </span>
                  </a>
                )}
              </div>
              <div className="fw-500 font-20 margin-t-10 margin-b-16">
                {designation}
              </div>
              <div className=" font-18">{description}</div>
            </div>
            <div>
              {returnSocial()}
              <div className="flex-vertical-center font-18 margin-t-8">
                <span className="margin-r-5">Email:</span>
                <span>
                  <a
                    className="font-20 primary-color font-18"
                    href={`mailto:${mail}`}>
                    {mail}
                  </a>
                </span>
              </div>
              <div className="flex-vertical-center font-18 margin-t-8">
                <span className="margin-r-5">Mobile:</span>
                <a
                  className="no-underline primary-color font-18"
                  href={`tel:${mobile}`}>
                  +91-{mobile}
                </a>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="education border-b margin-t-24 padding-b-24">
            <div className="flex-horizontal-center fw-600 font-20 margin-b-16">
              EDUCATION
            </div>
            {returnEducation()}
          </div>

          {/* SKILL SUMMARY */}
          <div className="education border-b margin-t-24 padding-b-24">
            <div className="flex-horizontal-center fw-600 font-20 margin-b-16">
              SKILL SUMMARY
            </div>
            {returnSkills()}
          </div>

          {/* WORK EXPERIENCE */}
          <div className="education border-b margin-t-24 padding-b-24">
            <div className="flex-horizontal-center fw-600 font-20 margin-b-16">
              WORK EXPERIENCE
            </div>
            {workExperience()}
          </div>

          {/* REWARDS */}
          <div className="education border-b margin-t-24 padding-b-24">
            <div className="flex-horizontal-center fw-600 font-20">REWARDS</div>
            {returnRewards()}
          </div>

          {/* PROJECTS */}
          <div className="education margin-t-24">
            <div className="flex-horizontal-center fw-600 font-20 margin-b-16">
              PROJECTS
            </div>
            {returnProject()}
          </div>
        </div>
        {!download && (
          <a href={`./${name}_resume.pdf`} className="download-resume" download>
            <div>Download</div>
            <span class="material-symbols-outlined">download</span>
          </a>
        )}
      </div>
    </>
  );
}
