import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css';

const BoardList = (props) => {
  return props.boards.map((board) => (
    <Board
      key={board.boardId}
      boardId={board.boardId}
      title={board.title}
      owner={board.owner}
      onSelectBoard={props.onSelectBoard}
      onDeleteBoard={props.onDeleteBoard}
    />
  ));
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectBoard: PropTypes.func.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
};
export default BoardList;
