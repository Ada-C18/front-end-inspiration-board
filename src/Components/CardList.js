import React from 'react';
import Card from './Card';
import './CardList.css';
import PropTypes from 'prop-types';

const CardList = (props) => {
  return (
    <ul>
      {props.cardsData.map((card) => (
        <Card
          id={card.id}
          board_id={card.board_id}
          message={card.message}
          likes_count={card.likes_count}
          key={card.id}
          handleLikes={props.handleLikes}
          deleteCard={props.deleteCard}
        />
      ))}
    </ul>
  );
};

CardList.propTypes = {
  caardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,      
      board_id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.string.isRequired,
    })
  ),
  handleLikes: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,  
};

export default CardList;