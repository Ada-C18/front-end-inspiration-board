import React from "react";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardTitles = props.boardsData.map((board) => {
    return (
      <li
        key={board.board_id}
        onClick={() => props.updateSelceted(board.board_id)}
        className="boardTitle"
      >
        ✨ {board.title}
      </li>
    );
  });
  return (
    <section className="column">
      <h1>BOARDS</h1>
      <section className="boardScroll">{boardTitles}</section>
    </section>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.array.isRequired,
  updateSelceted: PropTypes.func.isRequired,
};

export default BoardList;
