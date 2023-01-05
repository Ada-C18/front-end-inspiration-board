import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  return <div>{props.title}</div>;
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Board;
