import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import NewCardForm from './NewCardForm';


const Card = (props) => {
  
  return(
   <div>
  <div><section></section></div>
  

  
  <h3 className="entry-name">{props.body}</h3>
  <section className="entry-bubble">
    <button className='num_likes'> {props.likes} 💕</button>
    <button className='delete_card' onClick={() => props.ondeleteCard(props.card_id)} >Delete</button>
    <button onClick={() => props.onlikedCard(props.card_id)}>+1</button>
    </section>
  </div>
  


)
};

export default Card;