import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const onBoardClick = () => {
    props.selectBoardNameCallback(props.id);
  };

  const selectedClass =
    props.isBoardSelected && props.idSelectedBoard === props.id
      ? "selected"
      : "";

  return (
    <li className="board-container">
      <div
        id={selectedClass}
        onClick={() => {
          onBoardClick();
        }}
      >
        {props.title}
      </div>
    </li>
  );
};

Board.propTypes = {
  selectedBoardName: PropTypes.string.isRequired,
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  card: PropTypes.array.isRequired,
};

export default Board;
