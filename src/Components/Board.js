import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
  // const selectBoard = (id) => {

  // }
  return (
    // card list
    // <CardList />
    // read cards from backend
    <li onClick={() => props.handleBoardClick(props.title, props.owner)}>
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
