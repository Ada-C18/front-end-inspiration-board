// import "../styles/FormNewCard.css";
import { useState } from "react";

const INITIAL_FORM = {
  message: "",
};

const FormNewCard = (props) => {
  const [formCard, setFormCard] = useState(INITIAL_FORM);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const newCardData = {
      ...formCard,
      board_id: props.boardId,
      [e.target.name]: e.target.value,
    };
    setFormCard(newCardData);
    setMessage(e.target.value);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    if (message.length === 0) {
      alert("Card must have message");
    } else {
      props.addCardCallbackFunc(formCard, props.boardId);
    }
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
      />

      <p> Preview card message: {message} </p>
      <input type="submit" value="Add Card" />
    </form>
  );
};

export default FormNewCard;
