import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardList = (props) => {
  // console.log(props.boards);
  const boardComponent = props.boards.map((board) => {
    return (
      <Board
        key={board.boardId}
        id={board.boardId}
        title={board.title}
        owner={board.owner}
        onSelectBoard={props.onSelectBoard}
      />
    );
  });
  return (
    <div>
      <h2>Boards</h2>
      <ol className="boards-list">{boardComponent}</ol>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onSelectBoard: PropTypes.func,
};

export default BoardList;
