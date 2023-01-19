import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardsList.css";

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
