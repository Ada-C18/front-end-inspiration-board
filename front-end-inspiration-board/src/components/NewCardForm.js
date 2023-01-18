import { useState } from "react";
import "./NewCardForm.css";

const INITIAL_CARD_FORM_DATA = {
  message: "",
};

const NewCardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_CARD_FORM_DATA);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    if (e.target.value.length <= 40) {
      const newFormData = {
        ...formData,
        [e.target.name]: e.target.value,
      };
      setFormData(newFormData);
      setCharCount(e.target.value.length);
    }
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallBackFunc(formData);
    setFormData(INITIAL_CARD_FORM_DATA);
    props.closeDialogCallBackFunc();
  };

  let messageValidity = charCount >= 40 ? "invalid" : "valid";

  return (
    <div className="CreateNewCard">
      <form onSubmit={handleNewCardSubmit}>
        <button id="close" onClick={props.closeDialogCallBackFunc}>
          X
        </button>

        <label id="dialogLabel" htmlFor="message">
          Enter Your Message
        </label>
        <input
          className={messageValidity}
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <h4>Remaining Characters: {40 - charCount}</h4>
        <input id="submitButton" type="submit" value="Add Card" />
      </form>
    </div>
  );
};

export default NewCardForm;
