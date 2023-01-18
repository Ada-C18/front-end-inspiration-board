import React from "react";
<<<<<<< HEAD
=======
/* import Board from "./Board.js"; */
import "./BoardList.css"
>>>>>>> 2ef70f206caa315d33e039550e5620bff8793c30

const boardList = ({ boardList, loadBoard }) => {
  const boardComponents = [];
  for (const board of boardList) {
    boardComponents.push(
      <li key={board.id} onClick={() => loadBoard(board.id)}>
        🌸 {board.id}: {board.title} - {board.owner}
      </li>
    );
  }

  return (
<<<<<<< HEAD
    <div>
      <h3>Board List Component</h3>
=======
    <div className= "board-list">
      <h3>~All Boards~</h3>
>>>>>>> 2ef70f206caa315d33e039550e5620bff8793c30
      <ul>{boardComponents}</ul>
    </div>
  );
};

export default boardList;
