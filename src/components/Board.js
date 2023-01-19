import React from "react";
import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const Board = ({ selectedBoard, cards, addCard, deleteCard }) => {
  console.log(`👁️${JSON.stringify(selectedBoard)}`);
  const cardComponents = [];
  if (cards) {
    for (const card of cards) {
      cardComponents.push(
        <Card
          key={card.id}
          id={card.id}
          selectedBoard={selectedBoard.id}
          message={card.message}
          deleteCard={deleteCard}
        ></Card>
      );
    }
  }

  if (!selectedBoard) {
    return;
  }
  return (
    <div>
      <h3>This is the board component</h3>
      <h2>
        Cards for {selectedBoard.title} by {selectedBoard.owner}
      </h2>
      <ul>{cardComponents}</ul>
      <NewCardForm addCardCallbackFunc={addCard} boardId={selectedBoard.id} />
    </div>
  );
};

// Board.propTypes = {
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Board;
