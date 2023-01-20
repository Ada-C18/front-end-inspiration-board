import { useState } from "react";
//import PropTypes from "prop-types";
import "./CreateCardForm.css";

// TODO: focus form if any part of parent div is clicked

const CreateCardForm = ({ createCard, autoFocus }) => {
  const emptyCard = {
    message: "",
  };

  const focusRef = (input) => {
    if (input && autoFocus) input.focus();
  };

  const [newCard, setNewCard] = useState(emptyCard);

  const onCardMessageChange = (event) =>
    setNewCard({ ...newCard, message: event.target.value });

  const submitCreateCardForm = (event) => {
    event.preventDefault();
    createCard(newCard);
    setNewCard(emptyCard);
  };

  return (
    <form className="card" onSubmit={submitCreateCardForm}>
      <textarea
        ref={focusRef}
        className="cardMessage"
        name="newCardMessage"
        value={newCard.message}
        placeholder="New Message"
        onChange={onCardMessageChange}
      />
      <input type="submit" value="✍️" />
    </form>
  );
};

export default CreateCardForm;
