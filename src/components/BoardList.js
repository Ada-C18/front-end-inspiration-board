import React from "react";
import Board from "./Board.js";

const boardList = ({ boards }) => {
  boards = [
    { title: "Nina's Board", owner: "Nina" },
    { title: "Lynn's Board", owner: "Lynn" },
  ];
  const boardComponents = [];
  for (const board of boards) {
    boardComponents.push(
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        cards={board.cards}
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
