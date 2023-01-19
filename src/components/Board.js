import PropTypes from "prop-types";

const Board = (props) => {
	const boardId = props.boardId; // hidden, implied primary key
	const title = props.title;
	const owner = props.owner;
	const updateSelectedBoard = props.updateSelectedBoard;

	// updateSelectedBoard

	return (
		<li
			style={{ cursor: "pointer" }}
			onClick={() => updateSelectedBoard(boardId)} // refactor, pass board props here,so don't need to GET board API call inside updatedSelected
		>
			Title: {title}
		</li>
	);
};

Board.propTypes = {
	boardId: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
	updateSelectedBoard: PropTypes.func.isRequired,
};

export default Board;
