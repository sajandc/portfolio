import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import Rating from "../Rating";
import "./index.scss";
export default function Feedback() {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(8);
  const [success, setSuccess] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSuccess(true);
  };

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="feedback">
      {!success ? (
        <form className="inner-container" onSubmit={onSubmit}>
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
            value={message}
            id="message"
            placeholder="Message"
            type="textarea"
          />
          <Button type="submit" text="Send" icon="send" />
        </form>
      ) : (
        <div className="inner-container">
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
