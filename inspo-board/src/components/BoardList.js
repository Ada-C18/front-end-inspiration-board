import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards }) => {
  return (
    <ul>
      {boards.map((board) => {
        return (
          <Board
            boardId={board.board_id}
            title={board.title}
            owner={board.owner}
          />
        );
      })}
    </ul>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
};

export default BoardList;
