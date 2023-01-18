import PropTypes from "prop-types";
import Board from "./Board";
import React, { useState } from "react";
import "./BoardList.css";

const BoardList = ({ boards }) => {
  const getBoardsListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.boardId}
          id={board.boardId}
          title={board.title}
          owner={board.owner}
          cards={board.cards}
        />
      );
    });
  };

  const [selectedBoard, setSelectedBoard] = useState(null);

  function handleBoardClick(board) {
    setSelectedBoard(board);
  }

  return (
    <div>
      {/* <ul className="boards-list-no-bullet">{getBoardsListJSX(boards)}</ul>; */}
      <ul className="boards-list-no-bullet">
        {boards.map((board) => (
          <li key={board.board_id} onClick={() => handleBoardClick(board)}>
            {board.title}
          </li>
        ))}
      </ul>
      <h2>Selected Board</h2>
      {/* {selectedBoard && ( */}

        <div>
        {selectedBoard ? `${selectedBoard.title} - ${selectedBoard.owner}` : "need to select board"};
        </div>
       {/* )} */}
   
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BoardList;
