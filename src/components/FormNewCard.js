import "../styles/FormNewCard.css";
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
      likes: 0,
    };
    setFormCard(newCardData);
    setMessage(e.target.value);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0) {
      alert("Card must have message");
    } else if (message.length > 40) {
      alert("Message must be less than 40 characters");
    } else {
      props.addCardCallbackFunc(formCard, props.boardId);
    }
  };

  return (
    <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message"></label>
      <input
        type="text"
        id="message"
        name="message"
        value={formCard.message}
        placeholder="Inspirational message"
        onChange={handleChange}
      />
      <br/>
      <br/> 
      <label>Card preview:</label>
      <p className="message-preview"> {message} </p>
      <input className = "button" type="submit" value="Add Card" />
    </form>
  );
};

export default FormNewCard;
