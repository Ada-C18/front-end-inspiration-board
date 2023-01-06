import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <h2>Selected Card</h2>
      <p>{props.message}</p>
      <button className='add_like' onClick={()=> props.deleteButton(props.buttonId)} ></button>
      <p>heart emoji here</p>
      <button className='delete_card' onClick={()=> props.likesButton(props.buttonId)}></button>
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
