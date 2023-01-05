import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = ({ boards, selectBoard }) => {
  const clickBoard = (event) => {
    selectBoard(event.target.id);
  };
  return (
    <div className="boardList">
      <h2>Board List</h2>
      {[...boards].map((board) => (
        <div
          className="boardListItem"
          key={board.id}
          id={board.id}
          onClick={clickBoard}
        >
          <div className="boardTitle">{board.title}</div>
          <div className="boardOwner">{board.owner}</div>
        </div>
      ))}
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectBoard: PropTypes.func,
};

export default BoardList;
