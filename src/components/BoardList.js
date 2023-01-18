import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  // const boardEntries = props.boardEntries;
  console.log(props);
  const deleteBoard = props.deleteBoard;
  const fetchCards = props.fetchCards;

  const boardComponents = props.boardEntries.map((boardEntry) => {
    return (
      <li key={boardEntry.id}>
        <Board
          id={boardEntry.id}
          title={boardEntry.title}
          owner={boardEntry.owner}
          deleteBoard={deleteBoard}
          fetchCards={fetchCards}
        />
      </li>
    );
  });

  return (
    <section>
      <ul className="board-list">{boardComponents}</ul>
    </section>
  );
};

BoardList.propTypes = {
  //Fill with correct proptypes
  boardEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBoard: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
};

export default BoardList;
