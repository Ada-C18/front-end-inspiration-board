import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardsList.css";

// boardlist needs to know which board is selected / needs to display
// function

function BoardsList({ boardsList, updateSelectedBoard }) {
  const boardComponents = [];

  for (const board of boardsList) {
    boardComponents.push(
      <Board
        key={board.board_id}
        boardId={board.board_id}
        title={board.title}
        owner={board.owner}
        updateSelectedBoard={updateSelectedBoard}
      />
    );
  }

  return (
    <div className="boards__list">
      <h1>Boards</h1>
      <ol>{boardComponents}</ol>
      {/* <h1>Selected Board</h1>
      <p>Select a Board from the Board List!</p>
      {SelectedBoard} */}
    </div>
  );
}

BoardsList.propTypes = {
  boardsList: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  updateSelectedBoard: PropTypes.func.isRequired,
};

export default BoardsList;
