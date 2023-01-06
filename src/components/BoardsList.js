import PropTypes from "prop-types";
import Board from "./Board";

// boardlist needs to know which board is selected / needs to display
// function

function BoardsList({ boardsList }) {
	const boardComponents = [];

	for (const board of boardsList) {
		boardComponents.push(
			<Board
				key={board.board_id}
				board_id={board.board_id}
				title={board.title}
				owner={board.owner}
				selected={board.selected}
			/>
		);
	};

	return (
		<>
			<h1>Boards</h1>
			<ol>{boardComponents}</ol>
			<h1>Selected Board</h1>
			<p>Select a Board from the Board List!</p>
			{/* {Board} */}
		</>
	);
}

BoardsList.propTypes = {
	boardsList: PropTypes.arrayOf(
		PropTypes.shape({
			board_id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			owner: PropTypes.string.isRequired,
		})
	),
};

export default BoardsList;
