import React from "react";
import PropTypes from 'prop-types'

const Board = (props) => {
  return(
    <div
      onClick = {() => props.onSelectBoard(props.boardId)}>
      {props.title}
    </div>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired
};

export default Board