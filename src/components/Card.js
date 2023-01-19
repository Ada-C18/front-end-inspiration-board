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
      <p>{props.likesCount} +1s</p>
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
  likesCount: PropTypes.number.isRequired,
  onLikesCount: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired
};

export default Card;
