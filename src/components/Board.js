import PropTypes from "prop-types";
import { useState } from "react";

const Board = (props) => {
  const boardId = props.boardId; // hidden, implied primary key
  const title = props.title;
  const owner = props.owner;
  const updateSelectedBoard = props.updateSelectedBoard;

  // updateSelectedBoard

  return (
    <li
      style={{ cursor: "pointer" }}
      onClick={() => updateSelectedBoard(boardId)}
    >
      Title: {title}
    </li>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  updateSelectedBoard: PropTypes.func.isRequired,
};

export default Board;
