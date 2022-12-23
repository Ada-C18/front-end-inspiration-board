import React, { useState } from "react";
import "/.NewCardForm.css";

const INITIAL_FORM_DATA = {
  message: "We got this!",
};

const NewCardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleChange = (e) => {
    console.log("handleChange called");
    const newFormData = {
      ...formData,
      [e.target.message]: e.target.value,
    };
    setFormData(newFormData);
  };
  const newCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallbackFunc(formData);
  };
  return (
    <form onSubmit={newCardSubmit}>
      <label htmlFor="message"></label>
      <input
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
    </form>
  );
};

export default NewCardForm;
