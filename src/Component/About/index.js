import "./index.scss";
import Header from "../Header";
import path from "../../assets/code.jpg";
export default function About() {
  return (
    <>
      <Header />
      <div className="about-me">
        <div className="title">I'm SAJAN and I love clean interfaces.</div>
        <div className="description-box">
          <div className="description-img">
            <img src={path} />
          </div>
          <div className="description">
            I have a passion for creating innovative and intuitive products that
            solve real-world problems. I have a proven track record of
            delivering successful products that delight customers and exceed
            business goals.
          </div>
        </div>
        <div className="work-ex">
          <h1>Work Experience </h1>
          <ul>
            <li>
              <div>
                {" "}
                Senior Software Engineer{" "}
                <span className="light">@Happay (CRED)</span>{" "}
              </div>
              <div className="light">April-2021 - Present</div>
            </li>
            <li>
              <div>
                Frontend Developer <span className="light">@Happay</span>
              </div>
              <div className="light">Jan-2020 - Mar-2021</div>
            </li>
            <li>
              <div>
                Intern <span className="light">@Happay</span>
              </div>
              <div className="light">Aug-2018 - Dec-2019</div>
            </li>
          </ul>
        </div>
        <div className="lets-talk">
          <h1 className="talk-title">Let's talk about your project</h1>
          <h1 className="mail-id">
            <a href="mailto:sajan.d.chouhan@gmail.com">hi@sajan.co.in</a>
          </h1>
          <hr />
          <div className="social-media">
            <ul className="list">
              <li>
                <a
                  href="https://www.linkedin.com/in/sajandchouhan/"
                  target="_blank"
                >
                  LinkendIn
                </a>
              </li>
              <li>
                <a href="https://github.com/sajandc" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="https://twitter.com/iam_SajanDC" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sajan.d.chouhan/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC9l0BBYYB0BxMOta-e5q60g"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
