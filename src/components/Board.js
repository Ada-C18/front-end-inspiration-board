import React from "react";
import "./Board.css";
import Card from "./Card";
import PropTypes from "prop-types";
import axios from "axios";

const Board = ({ selectedBoard, cards }) => {
  console.log(`🤍${cards}`);
  const cardComponents = [];
  if (cards) {
    for (const card of cards) {
      cardComponents.push(<Card key={card.id} message={card.message}></Card>);
    }
  }

  if (!selectedBoard) {
    return;
  }
  return (
    <div style={{ outline: "2px dotted pink" }}>
      <h3>This is the board component</h3>
      <h2>
        Cards for {selectedBoard.title} by {selectedBoard.owner}
      </h2>
      <ul>{cardComponents}</ul>
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
