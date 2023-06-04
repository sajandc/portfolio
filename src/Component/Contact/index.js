import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import Header from "../Header";
import Button from "../../CustomComponent/Button";
import TextInput from "../../CustomComponent/TextInput";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <Marquee
          className="contact-heading"
          name="SAY HELLO, DON'T BE A STRANGER"
          title="CONTACT ME"
        />
        <div className="contact-text">
          <div className="description">
            <h2>Hire Me </h2>I’m also available for new freelance projects. Fill
            in the form and I’ll get back to you.
          </div>
        </div>
        <form className="contact-form">
          <TextInput placeholder="Name" onChange={() => {}}/>
          <TextInput placeholder="Email" onChange={() => {}}/>
          <TextInput placeholder="Message" type="textarea" onChange={() => {}}/> 
          <Button text="Submit" className="contact-btn"/>
        </form>
      </div>
    </>
  );
}
