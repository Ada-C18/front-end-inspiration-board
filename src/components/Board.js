import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  return (
    <li>
      <button onClick={() => props.onSelectBoard(props.id)}>
        {props.title} -{props.owner}
      </button>
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default Board;
