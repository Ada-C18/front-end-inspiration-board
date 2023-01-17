import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const id = props.id;
  const title = props.title;
  const owner = props.owner;
  const deleteBoard = props.deleteBoard;

  return (
    <div>
      <ul>
        <li>board id: {id}</li>
        <li>title: {title}</li>
        <li>owner: {owner}</li>
      </ul>
      <button onClick={() => deleteBoard(id)}>Delete Board</button>
    </div>
  );
};

Board.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default Board;
