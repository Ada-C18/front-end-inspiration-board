import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  
  const onBoardSelect = (event) => {
    props.onSelect(props.board);
    props.displayCards(props.board.board_id);
    };

  return (
    <div onClick={onBoardSelect}>{props.board.title}</div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    board_id: PropTypes.number,
    cards: PropTypes.arrayOf(PropTypes.shape({
      card_id: PropTypes.number,
      likes: PropTypes.number,
      message: PropTypes.string
    })),
    title: PropTypes.string,
    owner: PropTypes.string
  }),  
  onSelect: PropTypes.func,
  displayCards: PropTypes.func
}

export default Board;