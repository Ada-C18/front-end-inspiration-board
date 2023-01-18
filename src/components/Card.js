import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  return (
    <div>
    
      <p>{props.message}</p>
      <button
        className='add_like'
        onClick={() => props.onLikesCount(props.cardId)}
      >
        🌟
      </button>
      <p></p>
      <button
        className='delete_card'
        onClick={() => props.onDeleteCard(props.cardId)}
      >
        delete card
      </button>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onLikesCount: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired
};

export default Card;
