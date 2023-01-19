import PropTypes from "prop-types";
import Board from "./Board";
// import React, { useState } from "react";
import "./BoardList.css";

const BoardList = ({ boards, loadBoardOnClick }) => {
  // const getBoardsListJSX = (boards) => {
  //   return boards.map((board) => {
  //     return (
  //       <Board
  //         key={board.boardId}
  //         id={board.boardId}
  //         title={board.title}
  //         owner={board.owner}
  //         // cards={board.cards}
  //
  //
  //       />
  //     );
  //   });
  // };

  const getBoardsComponents = (boards) => {
    return boards.map((board) => (
      <li key={board.boardId} onClick={() => loadBoardOnClick(board)}>
        📍{board.title}
      </li>
    ));
  };
  return (
    <div className="board-list">
      <ul className="boards-list-no-bullet">{getBoardsComponents(boards)}</ul>
      {/* <ul className="boards-list-no-bullet">
        {boards.map((board) => (
          <li key={board.board_id} onClick={() => loadBoardOnClick(board)}>
            {board.boardId}. {board.title}
          </li>
        ))}
      </ul> */}
      {/* <h2>Selected Board</h2> */}
      {/* {selectedBoard && ( */}
      {/* <div>
        {selectedBoard
          ? `${selectedBoard.title} - ${selectedBoard.owner}`
          : "Select a Board from the Board List!"}
      </div> */}
      {/* )} */}
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  loadBoardOnClick: PropTypes.func.isRequired,
};

export default BoardList;
