import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import Rating from "../Rating";
import "./index.scss";
import { callAPI, validateEmail } from "../../helper/commonFunction";
import { FEEDBACK } from "../../Constants/url";
export default function Feedback() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("")
  const [rating, setRating] = useState(8);
  const [success, setSuccess] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!validateEmail(state.email)) {
      setError("Please Enter Valid Email Id");
      return -1;
    }
    callAPI(
      { message: state.message, rating, email: state.email, name: state.name },
      FEEDBACK,
      "POST"
    ).then((res) => {
      setSuccess(true);
    });
  };

  const onChange = (event) => {
    const {id, value} = event.target
    state[id] = value;
    setState({ ...state });
    setError("");
  };

  return (
    <div className="feedback">
      {!success ? (
        <form className="feedback-inner-container" onSubmit={onSubmit}>
          <div className="title">How would you like to rate this webpage?</div>
          <Rating
            id="rating"
            min={0}
            max={10}
            value={rating}
            onChange={(v) => setRating(+v)}
          />
          <TextInput
            onChange={onChange}
            value={state.name}
            id="name"
            required
            placeholder="Name"
          />
          <TextInput
            onChange={onChange}
            value={state.email}
            id="email"
            required
            placeholder="Email"
          />
          {error && <div className="red">{error}</div>}
          <TextInput
            onChange={onChange}
            value={state.message}
            id="message"
            placeholder="Message"
            type="textarea"
          />
          <Button type="submit" text="Send" icon="send" />
        </form>
      ) : (
        <div className="feedback-inner-container">
          <div className="title">Thank you for your valuable feedback !</div>
          <span class="material-symbols-outlined sucess-thumb">thumb_up</span>
          <div className="description">
            All the feedback will be taken in the constructive way and will try
            to improve on it.
          </div>
        </div>
      )}
    </div>
  );
}
