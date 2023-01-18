import { useState } from "react";
//import PropTypes from "prop-types";
import "./CreateCardForm.css";

const CreateCardForm = ({ createCard }) => {
  const emptyCard = {
    message: "",
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
    <form onSubmit={submitCreateCardForm}>
      <div className="stylingboard">
        <h2>New Card</h2>
      </div>
      <label htmlFor="newCardMessage">New Card Message:</label>
      <input
        name="newCardMessage"
        value={newCard.message}
        type="text"
        onChange={onCardMessageChange}
      />
      <input type="submit" value="Create Card" />
    </form>
  );
};

export default CreateCardForm;
