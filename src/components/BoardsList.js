import PropTypes from "prop-types";
import Board from "./Board";

function BoardsList({ boardsList }) {
	const boardComponents = [];

	for (const board of boardsList) {
		boardComponents.push(
			<Board
				key={board.board_id}
				board_id={board.board_id}
				title={board.title}
				owner={board.owner}
			/>
		);
	}
	return <div>{boardComponents}</div>;
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
