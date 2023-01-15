import React from "react";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const boardTitles = props.boardsData.map((board) => {
    return (
      <li
        key={board.board_id}
        onClick={() => props.updateSelceted(board.board_id)}
      >
        {board.title}
      </li>
    );
  });
  return (
    <section>
      <h1>BOARDS</h1>
      <section>{boardTitles}</section>
    </section>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.array.isRequired,
  updateSelceted: PropTypes.func.isRequired,
};

export default BoardList;
