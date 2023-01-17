import PropTypes from "prop-types";
import { useState } from "react";

const Board = (props) => {
	const board_id = props.board_id; // hidden, implied primary key
	const title = props.title;
	const owner = props.owner;
	// const selected = props.selected; // might not need attribute

	// const [selected, setSelected] = useState(false); // move useState somewhere else

	const updateBoard = () => {
		console.log("updateBoard called");
		// 	const newBoard = {
		// 		board_id: board_id,
		// 		title: title,
		// 		owner: owner,
		// 		selected: !selected,
		// 	}
		// 	// selected = !selected;
	};

	return (
		<li style={{ cursor: "pointer" }} onClick={updateBoard}>
			Title: {title}
		</li>
	);
};

Board.propTypes = {
	board_id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
};

export default Board;
