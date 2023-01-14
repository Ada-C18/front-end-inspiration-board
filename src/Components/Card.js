import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {


  return (
  <div className='each_card'> 
    <p>{props.message}</p>
    <ul className='card_info'>
      <li><p>{props.likes_count} 👍</p></li>
      <li><p onClick={() => props.handleLikes(props.card)}>+1</p></li>
      <li><p onClick={() => props.deleteCard(props.card)}>Delete</p></li>
    </ul>
  </div>);
};


Card.propTypes = {
  id: PropTypes.number.isRequired,      
  board_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  handleLikes: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;