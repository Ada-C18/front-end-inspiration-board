import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const id = props.id;
  const title = props.title;
  const owner = props.owner;

  return (
    <div>
      board id: {id}
      title: {title}
      owner: {owner}
    </div>
  );
};

Board.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
