import PropTypes from "prop-types";
import React from "react";
import "./Board.css";

const Board = (props) => {
  const id = props.id;
  const title = props.title;

  return (
    <li className="boards_items">
      {id}. {title}
    </li>
  );
};

Board.propTypes = {
  //   id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  //   owner: PropTypes.string.isRequired,
};

export default Board;
