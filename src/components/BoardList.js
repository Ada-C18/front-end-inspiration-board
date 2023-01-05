import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  // const boardEntries = props.boardEntries;
  console.log(props);

  const boardComponents = props.boardEntries.map((boardEntry) => {
	return (
	  <li key={boardEntry.id}>
		<Board
		  id={boardEntry.id}
		  title={boardEntry.title}
		  owner={boardEntry.owner}
		/>
	  </li>
	);
  });

  return (
	<section>
	  <ul>{boardComponents}</ul>
	</section>
  );
};

BoardList.propTypes = {
  //Fill with correct proptypes
  boardEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
