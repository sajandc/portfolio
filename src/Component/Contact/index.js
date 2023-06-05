import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import Header from "../Header";
import Button from "../../CustomComponent/Button";
import TextInput from "../../CustomComponent/TextInput";
import { useState } from "react";
export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const onChange = (event) => {
    state[event.target.id] = event.target.value;
    setState({ ...state });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSuccess(true);
    console.log("state", state);
  };
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
        {!success ? (
          <form className="contact-form" onSubmit={onSubmit}>
            <TextInput
              id="name"
              value={state.name}
              placeholder="Name"
              onChange={onChange}
            />
            <TextInput
              id="email"
              value={state.email}
              placeholder="Email"
              onChange={onChange}
            />
            <TextInput
              id="message"
              placeholder="Message"
              type="textarea"
              onChange={onChange}
              value={state.message}
            />
            <Button type="submit" text="Submit" className="contact-btn" />
          </form>
        ) : (
          <div className="contact-form success">
            <div>Thank you</div>
            <span class="material-symbols-outlined sucess-thumb">thumb_up</span>
            <div>We will contact you soon, thanks for showing interest</div>
          </div>
        )}
      </div>
    </>
  );
}
