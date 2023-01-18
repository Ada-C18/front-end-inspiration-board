import PropTypes from "prop-types";
import Board from "./Board";

// boardlist needs to know which board is selected / needs to display
// function

function BoardsList({ boardsList, updateSelectedBoard }) {
	const boardComponents = [];

	for (const board of boardsList) {
		boardComponents.push(
			<Board
				key={board.boardId}
				boardId={board.boardId}
				title={board.title}
				owner={board.owner}
				updateSelectedBoard={updateSelectedBoard}
			/>
		);
	}

	return (
		<>
			<h1>Boards</h1>
			<ol>{boardComponents}</ol>
			{/* <h1>Selected Board</h1>
      <p>Select a Board from the Board List!</p>
      {SelectedBoard} */}
		</>
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
