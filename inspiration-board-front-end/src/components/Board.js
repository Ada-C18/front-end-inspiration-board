import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  return (
    <button onClick={() => props.onClickBoard(props.id)}>{props.title}</button>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickBoard: PropTypes.func,
};

export default Board;
