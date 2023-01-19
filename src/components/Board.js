import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ boardId, title, owner, onSelectBoard, cards }) => {
  const onClickHandler = () => {
    onSelectBoard(boardId, title, owner, cards);
  };

  return (
    <li className="board-container">
      <div className="board-details" onClick={onClickHandler}>
        <span className="board-title">{title}</span>
        <span className="board-owner">{owner}</span>
      </div>
    </li>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func,
  cards: PropTypes.array,
};

export default Board;
