import { useState } from "react";

const Board = (props) => {
  // const onClick = () => {
  //     const updateBoard= {
  //     id:props.id,
  //     title:props.title,
  //     owner:props.owner
  // }
  // props.onDisplayBoard;
  // }

  const returnedBoards = props.boards.map((board) => {
    return (
      <ol>
        <li> {board.title} </li>
      </ol>
    );
  });

  return <div> {returnedBoards} </div>;
};

export default Board;
