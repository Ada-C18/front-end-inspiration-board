import Board from "./Board";
import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

function BoardList({
  boardData,
  cardData,
  selectedBoard,
  setSelectedBoard,
  updateLikes,
  displayAllCardsForOneBoard,
}) {
  const ListofBoards = [];
  console.log("boardData in boardlist", boardData);

  for (const board of boardData) {
    ListofBoards.push(
      <Board
        key={board.boardId}
        boardId={board.boardId}
        owner={board.owner}
        title={board.title}
        cards={board.cards}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
        displayAllCardsForOneBoard={displayAllCardsForOneBoard}
        updateLikes={updateLikes}
      />
    );
  }
  return (
    <div id="BoardListContainer">
      <h2>Boards</h2>
      <ul id="ListOfBoards">{ListofBoards}</ul>
    </div>
  );
}

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    })
  ),
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
  selectedBoard: PropTypes.shape({
    boardId: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }),
  updateLikes: PropTypes.func.isRequired,
  displayAllCardsForOneBoard: PropTypes.func.isRequired,
  setSelectedBoard: PropTypes.func.isRequired,
};
export default BoardList;
