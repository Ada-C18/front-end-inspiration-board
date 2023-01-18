import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = ({ boards, selectBoard }) => {
  const clickBoard = (event) => selectBoard(parseInt(event.currentTarget.id));
  return (
    <section className="boardList">
      <div className="stylingboard">
        <h2>Boards</h2>
      </div>
      {[...boards].map((board) => (
        <div
          className="boardListItem"
          key={board.board_id}
          id={board.board_id}
          onClick={clickBoard}
        >
          <h3 className="boardTitle">{board.title}</h3> by
          <span className="boardOwner">{board.owner}</span>
        </div>
      ))}
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectBoard: PropTypes.func,
};

export default BoardList;
