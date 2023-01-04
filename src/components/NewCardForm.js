import React, { useState } from "react";
import "./NewCardForm.css";

const INITIAL_FORM_DATA = {
  message: "",
};

const NewCardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const handleChange = (e) => {
    console.log("handleChange called");
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    console.log(newFormData);
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
      <input type="submit" value="Add Card" />
    </form>
  );
};

export default NewCardForm;
