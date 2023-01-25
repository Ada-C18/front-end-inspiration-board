import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
  return (
    <div className='board-card board-card-container ' onClick={() => props.onSelectBoard(props.boardId)}>
      <p>{props.title} by {props.owner}</p>
      <button onClick={() => props.onDeleteBoard(props.boardId)}>Remove Board</button>
    </div>
  );
};

Board.propTypes = {
 
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
};

export default Board;
