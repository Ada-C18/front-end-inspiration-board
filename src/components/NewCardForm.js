import React, { useState } from "react";
import "./NewCardForm.css";
import PropTypes from "prop-types";

const INITIAL_FORM_DATA = {
  message: "Type Card Message Here",
};

const NewCardForm = ({
  addCardFunc,
  selectedBoard,
  boardData,
  setBoardData,
}) => {
  const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log(`handle change called`);
    console.log(
      `Target name: ${e.target.name} Target value: ${e.target.value}`
    );

    const newCardData = {
      ...cardFormData,
      // [e.target.board]:
      [e.target.name]: e.target.value,
    };
    console.log("new card data in new form", newCardData);
    setCardFormData(newCardData);
  };

  const updateLocalBoardState = () => {};

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    addCardFunc(selectedBoard.boardId, cardFormData);
  };

  return (
    <div className="NewCardFormContainer">
      <h2>Create A New Card</h2>
      <form id="CardForm" onSubmit={handleNewCardSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          value={cardFormData.message}
          onChange={handleChange}
        />

        <input type="submit" value="Add Card" />
      </form>
    </div>
  );
};

export default NewCardForm;
