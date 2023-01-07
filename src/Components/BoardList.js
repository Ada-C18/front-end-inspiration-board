import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css'

const BoardList = (props) => {
  return (
    <ul>
      {props.boardData.map((board) => (
        <Board
          title={board.title}
          owner={board.owner}
          key={board.id}
          handleBoardClick={props.handleBoardClick}
        />
      ))}
    </ul>
  );
};

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleBoardClick: PropTypes.func.isRequired,
};
export default BoardList;
