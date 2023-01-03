import React from 'react';
import Board from './Board';

const BoardList = (props) => {
  return (
    <ul>
      {props.boardData.map((board) => (
        <Board
          title={board.title}
          owner={board.owner}
          id={board.board_id}
          handleBoardClick={props.handleBoardClick}
        />
      ))}
    </ul>
  );
  // call to backend to read all boards
  // on click board display board name and display card list
};
export default BoardList;
