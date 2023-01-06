import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {
  return (
    <div>
      <h2>Cards</h2>
      <p>{props.message}</p>
      <button className='add_like' onClick={()=> props.deleteButton(props.buttonId)} >add like</button>
      <p>heart emoji here</p>
      <button className='delete_card' onClick={()=> props.likesButton(props.buttonId)}>delete card</button>
    </div>
  );
};

Card.propTypes = {
  CardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  likesButton: PropTypes.func.isRequired,
  deleteButton: PropTypes.func.isRequired,
};

export default Card;
