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
    <form className="card" onSubmit={submitCreateCardForm}>
      <textarea
        className="cardMessage"
        name="newCardMessage"
        value={newCard.message}
        placeholder="New Message"
        onChange={onCardMessageChange}
      />
      <input type="submit" value="Write Card ✍️" />
    </form>
  );
};

export default CreateCardForm;
