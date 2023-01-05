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
      <ul className="BoardTitles">
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          onClickBoard={clickToSelectBoard}
        />
      </ul>
    );
  });
  return (
    <div className="App">
      <h3 className="BoardHeading">Boards:</h3>
      <ul>
        {board}
        <p className="BoardHeading">
          Selected Board: {selectedBoard.title} -- {selectedBoard.owner}'s Board
        </p>
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
