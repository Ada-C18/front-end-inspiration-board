import React from 'react';
import PropTypes from 'prop-types';
import CardList from './BoardList';

const Board = (props) => {
  return (
    <div>
      <h2>Selected Board</h2>
      <p>{props.title}</p>
      <h2>Cards for {props.title}</h2>
      <CardList />
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
