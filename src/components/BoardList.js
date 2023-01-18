import React from "react";
/* import Board from "./Board.js"; */
import "./BoardList.css";

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
    <div className="board-list">
      <h3>~All Boards~</h3>
      <ul>{boardComponents}</ul>
    </div>
  );
};

export default boardList;
