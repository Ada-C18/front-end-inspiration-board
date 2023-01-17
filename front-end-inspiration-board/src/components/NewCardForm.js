import { useState } from "react";
// import "./NewBoardForm.css"; Make new css

const INITIAL_CARD_FORM_DATA = {
  message: "",
};

const NewCardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_CARD_FORM_DATA);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallBackFunc(formData);
    setFormData(INITIAL_CARD_FORM_DATA);
  };

  return (
    <div className="CreateNewCard">
      <form onSubmit={handleNewCardSubmit}>
        <label htmlFor="message">message</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <input id="submitButton" type="submit" value="Add Card" />
      </form>
    </div>
  );
};

export default NewCardForm;
