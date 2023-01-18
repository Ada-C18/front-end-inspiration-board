import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const handleSelectBoard = () => {
    props.onSelectBoard(props.title, props.owner, props.id);
  };

  return (
    <li>
      <button className="board-name" onClick={handleSelectBoard}>
        {props.title} - {props.owner}
      </button>
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func,
};

export default Board;
