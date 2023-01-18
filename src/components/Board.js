import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const id = props.id;
  const title = props.title;
  const owner = props.owner;
  const deleteBoard = props.deleteBoard;
  const fetchCards = props.fetchCards;

  var boardIsClicked = false;
  const boardItemClass = boardIsClicked ? "board-item--selected" : "board-item";

  const toggleBoardItem = () => {
    console.log(boardItemClass);
    boardIsClicked = !boardIsClicked;
    console.log(boardItemClass);
  };

  return (
    <div className={boardItemClass} onClick={() => toggleBoardItem()}>
      {/* <li>board id: {id}</li> */}
      <button className="button_click" onClick={() => deleteBoard(id)}>x</button>
      <div className="board-name-text" onClick={() => fetchCards()}>
        title: {title}
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
