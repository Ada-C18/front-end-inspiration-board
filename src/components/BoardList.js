import React from "react";
import PropTypes from "prop-types";
// import App from "./components/app";
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
    <div>
      <h1>Boards</h1>
      <section>{boardTitles}</section>
      <button></button>
    </div>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.array.isRequired,
  updateSelceted: PropTypes.func.isRequired,
};

export default BoardList;
