import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  const board = props.boards.map((board) => {
    return (
      <ul className="BoardTitles">
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          onClickBoard={props.onClickBoard}
        />
      </ul>
    );
  });
  return (
    <div className="App">
      <h3 className="BoardHeading">Boards:</h3>
      <ul className="Boards-Box">{board}</ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onClickBoard: PropTypes.func.isRequired,
};
export default BoardList;
