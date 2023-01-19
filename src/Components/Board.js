import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
  return (
    <li
      className="each__board"
      onClick={() => props.handleBoardClick(props.title, props.owner, props.id)}
    >
      {props.title}
    </li>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  handleBoardClick: PropTypes.func.isRequired,
};
export default Board;
