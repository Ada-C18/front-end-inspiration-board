import { useState } from "react";
const Board = (props) => {
  // return (
  // <div onClick={() => props.onBoardClicked(props.board)}>
  //   {props.board.title}
  // </div>

  const onBoardClick = () => {
    const updatedBoard = {
      //board: props.board,
      title: props.board.title,
      owner: props.board.owner,
    };
    props.onBoardClicked(updatedBoard);
  };
  return (
    <div>
      <h1> Selected Boards </h1>
      <p>{onBoardClick}</p>
    </div>
  );
};
export default Board;
