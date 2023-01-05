import React from "react";
// import PropTypes from 'prop-types';


const Card = (props) => {
  return (<div>
    
    <p>{props.card.message}</p>
    <ul>
      <li><p>{props.card.likes_count} 👍</p></li>
      <li><p onClick={() => props.handleLikes(props.card)}>+1</p></li>
      <li><p onClick={() => props.deleteCard(props.card)}>Delete</p></li>
    </ul>
  </div>);
};

// Card.propTypes = {

// };

export default Card;