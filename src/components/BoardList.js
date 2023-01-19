import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = ({ boards, selectBoard, activeBoard }) => {
  const clickBoard = (event) => selectBoard(parseInt(event.currentTarget.id));
  return [...boards].map((board) => (
    <div
      className={`board ${board.board_id === activeBoard && "activeBoard"}`}
      key={board.board_id}
      id={board.board_id}
      onClick={clickBoard}
    >
      <div className="boardTitle">{board.title}</div>
      <div>
        for <span className="boardOwner">{board.owner}</span>
      </div>
    </div>
  ));
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectBoard: PropTypes.func,
  activeBoard: PropTypes.number,
};

export default BoardList;
