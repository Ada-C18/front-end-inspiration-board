import React from 'react';
import propTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <h2>Selected Card</h2>
      <p>{props.message}</p>
      <button className='add_like'></button>
      <button className='delete_card'></button>
    </div>
  );
};

// Card.propTypes = {
//   CardId: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   addLike: PropTypes.func.isRequired,
//   deleteCard: PropType.func.isRequired
// };

export default Card;
