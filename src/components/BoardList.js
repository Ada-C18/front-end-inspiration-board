import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards, onSelectBoard }) => {
  return (
    <ul>
      {boards.map((board) => {
        return (
          <Board
            key={board.board_id}
            boardId={board.board_id}
            title={board.title}
            owner={board.owner}
            cards={board.cards}
            onSelectBoard={onSelectBoard}
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
      cards: PropTypes.array,
    })
  ),
  onSelectBoard: PropTypes.func,
};

export default BoardList;
