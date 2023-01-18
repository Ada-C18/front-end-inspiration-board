import React, { useState } from "react";
import "./NewCardForm.css"

const kDefaultFormState = {
  message: ""
};

const NewCardForm = ({ handleCardSubmit, currentBoard }) => {
  const [cardData, setCardData] = useState(kDefaultFormState);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCardSubmit(currentBoard.boardId, cardData);
    setCardData(kDefaultFormState);
  };

  const handleCardFormData = (event) => {
    const dataValue = event.target.value;
    const dataName = event.target.name;

    const newCardData = { ...cardData, [dataName]: dataValue };
    setCardData(newCardData);
  };


  const invalidInput = cardData.message ? "" : "empty";
  
  return (
    <section>
      <h2>Create a New Card</h2>
      <form className="new-card-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Message</label>
          <input
            className={invalidInput}
            type="text"
            id="message"
            name="message"
            value={cardData.message}
            onChange={handleCardFormData}
            maxLength="40"
          />
          <p>Preview: {cardData.message}</p>
        </div>
        <div>
          <input className="add-button_card" type="submit" value="Add a Card" disabled={invalidInput}/>
        </div>
      </form>
    </section>
  );
};

export default NewCardForm;
