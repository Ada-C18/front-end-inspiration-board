import { useState } from "react";
import "./Forms.css";

const NewCardForm = ({ handleCardSubmit, currentBoardID }) => {
  const [newCard, setnewCard] = useState("");

  const handleNewCard = (event) => {
    setnewCard(event.target.value);
  };

  const handleSubmitCard = (event) => {
    event.preventDefault();
    handleCardSubmit(newCard, currentBoardID);
    setnewCard("");
  };
  return (
    <form onSubmit={handleSubmitCard}>
      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={newCard}
          placeholder="Add New Card"
          onChange={handleNewCard}
        ></input>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default NewCardForm;
