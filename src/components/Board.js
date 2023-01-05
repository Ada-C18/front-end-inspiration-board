import { useState } from "react";
const Board = (props) => {
  const returnedBoards = props.boards.map((board) => {
    // onclick event, the function and id to send to the function
    return (
      <li key={board.id} onClick={() => props.onBoardClicked(board.id)}>
        {board.title}
      </li>
    );
  });

  return (
    <div>
      <h1> Boards</h1>
      <ol> {returnedBoards} </ol>
    </div>
  );
};

export default Board;
