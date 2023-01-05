import PropTypes from "prop-types";
import Board from "./Board";

function BoardsList({ boardsList }) {
	const boardComponents = [];

	for (const board of boardsList) {
		boardComponents.push(
			<li>
				<Board
					key={board.board_id}
					board_id={board.board_id}
					title={board.title}
					owner={board.owner}
					selected={board.selected}
				/>
			</li>
		);
	}
	return (
		<>
			<h1>Boards</h1>
			<ol>{boardComponents}</ol>
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
