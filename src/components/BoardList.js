import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardList = ({ boards }) => {
  const getBoardsListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.boardId}
          id={board.boardId}
          title={board.title}
          owner={board.owner}
          cards={board.cards}
        />
      );
    });
  };

  return <ul className="boards-list-no-bullet">{getBoardsListJSX(boards)}</ul>;
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BoardList;
