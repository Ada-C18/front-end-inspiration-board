import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css';

const BoardList = (props) => {
  return (
    <div>
      <Board boardId={props.boardId} title={props.title} owner={props.owner} />
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};
export default BoardList;
