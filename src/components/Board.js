import React from 'react';
import PropTypes from 'prop-types';
import CardList from './BoardList';
import CardForm from './CardForm';
import './Board.css'

const Board = (props) => {
  return (
    <div>
      <h2>Selected Board</h2>
      <p>{props.title}</p>
      <h2>Cards for {props.title}</h2>
      <CardList cards={props.cards} />
      <CardForm onFormSubmit={props.onFormSubmit} />
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  selectBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Board;
