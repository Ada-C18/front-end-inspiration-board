import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import "./AddCard.css";

const kColorTable = {
  "#C1D6D9": "green",
  "#F29979": "coral",
  hacker: "hacker",
};

const AddCard = () => {
  const loaderData = useLoaderData();

  const boardId = useLocation().pathname.split("/").pop();

  const { allBoardsData, onSubmitCard } = loaderData[0];

  const [cardInputValue, setCardInputValue] = useState("");
  const [inputBool, setInputBool] = useState(false);

  const singleBoardArr = allBoardsData.filter((board) => {
    return board.id === Number(boardId);
  });
  const cardColor = singleBoardArr[0].card_color;
  const colorClass = kColorTable[cardColor];

  const handleInputChange = (event) => {
    setInputBool(true);
    setCardInputValue(event.target.value);
  };

  const submitCard = (event) => {
    event.preventDefault();
    onSubmitCard(cardInputValue, boardId);
    setCardInputValue("");
  };

  return (
    <div>
      <div id="card-preview" className={`${colorClass}`}>
        {inputBool ? cardInputValue : "Add a new card to this board!"}
      </div>
      <form id="new-card-form" onSubmit={submitCard}>
        <div>
          <textarea
            type="text"
            value={cardInputValue}
            id="new-card-text"
            onChange={handleInputChange}
            maxLength="40"
            placeholder="Enter your card's message here!"
            required
          />
        </div>
        <div>
          <input type="submit" value="Submit" id="new-card-submit" />
        </div>
      </form>
    </div>
  );
};

export default AddCard;
