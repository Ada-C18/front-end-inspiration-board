import { useState } from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  const returnedBoards = props.boards.map((board) => {
    // onclick event, the function and id to send to the function
    return (
      <div key={board.id}>
        <li onClick={() => props.onBoardClicked(board.id)}>{board.title}</li>
      </div>
    );
  });

  return (
    <div>
      <h1> Boards</h1>
      <ol className="each_board_name"> {returnedBoards} </ol>
    </div>
  );
};

Board.propTypes = {
  onBoardClicked: PropTypes.func.isRequired,
};
export default Board;
