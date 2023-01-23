//import css here
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewCardForm.css";

const INITIAL_FORM_DATA = {
  message: "Enter your message here",
};

const NewCardForm = (props) => {
  const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    let datafield = e.target.value;
    const newCardFormData = {
      ...cardFormData,
      [e.target.name]: datafield,
    };
    setCardFormData(newCardFormData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCard(cardFormData);
  };
  return (
    <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message" className="text-form">
        Message
      </label>
      <br />
      <input
        type="text"
        id="message"
        name="message"
        value={cardFormData.message}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Add Card" />
    </form>
  );
};
NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};
export default NewCardForm;
