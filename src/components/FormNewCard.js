// import "../styles/FormNewCard.css";
import "../styles/FormNewCard.css";
import { useState } from "react";

const INITIAL_FORM = {
  message: "",
};

const FormNewCard = (props) => {
  const [formCard, setFormCard] = useState(INITIAL_FORM);
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isValidInput, setIsValidInput] = useState(true);

  const handleChange = (e) => {
    const newCardData = {
      ...formCard,
      board_id: props.boardId,
      [e.target.name]: e.target.value,
      likes: 0,
    };
    setFormCard(newCardData);
    setMessage(e.target.value);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formCard));
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.message) {
      errors.message = "Card must have message";
      setIsValidInput(false);
    } else if (values.message.length > 40) {
      errors.message = "Message must be less than 40 characters";
      setIsValidInput(false);
    } else {
      props.addCardCallbackFunc(formCard, props.boardId);
      setIsValidInput(true);
    }
    return errors;
  };

  return (
    <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message"> Message </label>
      <input
        type="text"
        id="message"
        name="message"
        value={formCard.message}
        placeholder="Inspirational message"
        onChange={handleChange}
        className={isValidInput ? "valid" : "invalid"}
      />
      <p className="cardError">{formErrors.message}</p>
      <p> Preview card message: {message} </p>
      <input type="submit" value="Add Card" />
    </form>
  );
};

export default FormNewCard;
