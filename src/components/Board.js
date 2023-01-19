import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const id = props.id;
  const title = props.title;
  const owner = props.owner;
  const deleteBoard = props.deleteBoard;
  const fetchCards = props.fetchCards;

  return (
    <div className="board-item">
      {/* <li>board id: {id}</li> */}
      <button className="button_click" onClick={() => deleteBoard(id)}>
        x
      </button>
      <div className="board-name-text" onClick={() => fetchCards(id)}>
        {title}
      </div>
      {/* <li>owner: {owner}</li> */}
    </div>
  );
};

Board.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
};

export default Board;
