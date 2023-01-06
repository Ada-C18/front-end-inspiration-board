import React from "react";
import Board from "./Board.js";

const boardList = ({ boardList }) => {
  const boardComponents = [];
  for (const board of boardList) {
    boardComponents.push(
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        // cards={board.cards}
      ></Board>
    );
  }

  return (
    <div>
      <ul>{boardComponents}</ul>
    </div>
  );
};

export default boardList;
