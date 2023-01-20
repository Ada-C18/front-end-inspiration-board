import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  const getBoardListJSX = (props) => {
    return props.boardData.map((board) => {
      return (
        <Board
          className="board-container"
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          idSelectedBoard={props.selectedBoardId}
          selectBoardNameCallback={props.selectedBoardCallback}
          isBoardSelected={props.isBoardSelected}
        />
      );
    });
  };

  return (
    <div className="boardlist-container">
      <h2>Boards</h2>
      <button
        className="hide-button"
        type="button"
        onClick={props.boardFormButtonHandler}
      >
        {props.isBoardFormDisplayed
          ? "Hide Create Board Form"
          : "Show Create Board Form"}
      </button>
      <ul className="board-list-display">{getBoardListJSX(props)}</ul>
      <h3>Selected Board </h3>
      <div id="selected-board">
        {props.isBoardSelected ? `${props.selectedBoard.title}` : ""}
      </div>
    </div>
  );
};

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  selectedBoardId: PropTypes.number,
  isBoardSelected: PropTypes.bool,
  selectedBoardCallback: PropTypes.func,
};

export default BoardList;
