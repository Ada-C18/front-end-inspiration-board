import { useState } from "react";
//import PropTypes from "prop-types";

const CreateCardForm = ({ createCard, board }) => {
  const emptyCard = {
    message: "",
    board_id: board,
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
      <h3>New Card</h3>
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
