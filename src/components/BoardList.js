import { useState } from "react";
const BoardList = (props) => {
  // return(<div onClick = {() => props.onBoardClicked(props.board)}>{props.board.title}</div>)
  //     id:props.id,
  //     title:props.title,
  //     owner:props.owner
  // }
  // props.onDisplayBoard;
  // }
  const returnedBoards = props.boards.map((board) => {
    return <li> {board.title} </li>;
  });
  return <ol> {returnedBoards} </ol>;
};
export default BoardList;
