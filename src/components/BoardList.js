import React from "react";
import Board from "./Board.js";

const boardList = ({ boardList, loadBoard }) => {
  const boardComponents = [];
  for (const board of boardList) {
    boardComponents.push(
      <li key={board.id} onClick={() => loadBoard(board.id)}>
        🌸{board.id} {board.title} - {board.owner}
      </li>
    );
  }

  return (
    <div style={{ outline: "1px dashed dodgerblue" }}>
      <h3>Board List Component</h3>
      <ul>{boardComponents}</ul>
    </div>
  );
};

export default boardList;
