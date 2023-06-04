import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import "./index.scss";
import Rating from "../Rating";
export default function Feedback() {
  const [value, setValue] = useState(8);

  return (
    <div className="feedback">
      <form>
        <div className="title">How would you like to rate this webpage?</div>
        <Rating
          min={0}
          max={10}
          value={value}
          onChange={(val) => setValue(val)}
        />
        <TextInput placeholder="Message" type="textarea" />
        <Button text="Send" icon="send" />
      </form>
    </div>
  );
}
