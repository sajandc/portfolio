import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import Header from "../Header";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <Marquee
          className="contact-heading"
          name="SAY HELLO, DON'T BE A STANGER"
          title="CONTACT ME"
        />
        <div className="contact-text">
          <div className="description">
            <h2>Hire Me </h2>I’m also available for new freelance projects. Fill
            in the form and I’ll get back to you.
          </div>
        </div>
        <form className="contact-form">
          <input required placeholder="Name" />
          <input required placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
