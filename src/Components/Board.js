import React from 'react';

const Board = (props) => {
  // const selectBoard = (id) => {

  // }
  return (
    // card list
    // <CardList />
    // read cards from backend
    <li onClick={() => props.handleBoardClick(props.title, props.owner)}>
      {props.title}
    </li>
  );
};
export default Board;
