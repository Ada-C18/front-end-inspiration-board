import React, { useState } from "react";
import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

// const emptyBoard = [{ id: 0, title: " ", owner: " " }];

const BoardList = (props) => {
  const [selectedBoard, setSelectedBoard] = useState(props.boards);
  const clickToSelectBoard = (id) => {
    console.log("this function is running!");
    for (const board of props.boards) {
      console.log(board, id);
      if (board.id === id) {
        setSelectedBoard(board);
      }
    }
  };
  const board = props.boards.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        onClickBoard={clickToSelectBoard}
      />
    );
  });
  return (
    <div className="App">
      <h2>Boards</h2>
      <ul>
        {board}
        <p>selectedBoard={selectedBoard.title}</p>
      </ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default BoardList;
