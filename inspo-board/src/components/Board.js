import React from "react";
import PropTypes from "prop-types";

const Board = ({ boardId, title, owner, onSelectBoard, cards }) => {
  const onClickHandler = () => {
    onSelectBoard(boardId, title, owner, cards);
  };

  return (
    <li onClick={onClickHandler}>
      {title} - {owner}
    </li>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
  cards: PropTypes.array,
};

export default Board;
