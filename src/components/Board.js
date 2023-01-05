import PropTypes from "prop-types";


const Board = (props) => {
	const board_id = props.board_id; // hidden, implied primary key
	const title = props.title;
	const owner = props.owner;
	const selected = props.selected;

	return (<Board></Board>
		// elements
		// <>
		// 	<ol> 
		// 		<li>Title: {title}</li>
		// 		{/* <li>Owner: {owner}</li> */}
		// 	</ol>
		// </>
	);
};

Board.propTypes = {
	board_id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
};

export default Board;
