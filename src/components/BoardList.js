import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  return (
    <ol className="boards__list">
      {props.boardsData.map((board) => (
        <li
          key={`${board.board_id}-${board.owner}`}
          onClick={() => props.onSelectBoard(board.board_id)}
          title={board.title}
        >
          {board.title}
        </li>
      ))}
    </ol>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
