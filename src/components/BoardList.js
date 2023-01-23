import React from 'react';
import Boards from './Board';

const BoardList = (props) => {
  return (
    props.boardData.map((board) => {
      return (
        <Boards
          key={board.board_id}
          board_id={board.board_id}
          onboardClick={props.onboardClick}
          title ={board.title}
        ></Boards>
      );
    })
  );  
};

export default BoardList;