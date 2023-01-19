import React from 'react';

const Board = (props) => {
  console.log("hi", props.board.title);
  return (
    <div onClick={() => props.onBoardSelect(props.board)}>
      <li>
        <span>{props.board.title}</span>
      </li>
    </div>
  );
};

export default Board;
