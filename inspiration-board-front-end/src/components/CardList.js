import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const testCards = [
  { card_id: 3, message: "test message", likes: 0, board_id: 1 },
  { card_id: 1, message: "test message 1", likes: 0, board_id: 1 },
  { card_id: 2, message: "test message 2 ", likes: 0, board_id: 2 },
];

const CardList = (props) => {
  const currentBoardId = props.board.id;
  const currentCards = [];
  for (const card of testCards) {
    if (card.board_id === currentBoardId) {
      currentCards.push(card);
    }
  }
  const card = currentCards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes={card.likes}
        board_id={card.board_id}
      />
    );
  });

  return (
    <div>
      <ul>{card}</ul>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
};
export default CardList;
