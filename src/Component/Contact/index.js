import "./index.scss";
import Marquee from "../../CustomComponent/Marquee";
import Header from "../Header";
import Button from "../../CustomComponent/Button";
import TextInput from "../../CustomComponent/TextInput";
import { useState } from "react";
import { callAPI, validateEmail } from "../../helper/commonFunction";
import { QUERY } from "../../Constants/url";
export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("")
  const onChange = (event) => {
    state[event.target.id] = event.target.value;
    setState({ ...state });
    setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!validateEmail(state.email)) {
      setError("Please Enter Valid Email Id");
      return -1;
    }
    callAPI(
      { query: state.message, email: state.email, name: state.name },
      QUERY,
      "POST"
    ).then((res) => {
      setSuccess(true);
    });
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
              required
              onChange={onChange}
            />
            <TextInput
              id="email"
              value={state.email}
              placeholder="Email"
              required
              onChange={onChange}
            />
            {error && <div className="red">{error}</div>}
            <TextInput
              id="message"
              placeholder="Message"
              type="textarea"
              required
              onChange={onChange}
              value={state.message}
            />
            <Button type="submit" text="Submit" className="contact-btn" icon="send" />
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
