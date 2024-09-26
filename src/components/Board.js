import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Board = (props) => {
  return (
    <div onClick={() => props.onBoardSelect(props.board)}>
      {props.board.title}
    </div>
  );
};

export default Board;
