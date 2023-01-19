import './Card.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Card = (props) => {

    return (
        <div className=''>
            <p>{props.message}</p>
            <button onClick={() => props.updateCard(props.card_id)}>{props.likes_count} 💕</button>
            <button onClick={() => props.deleteCard(props.card_id)}>delete</button>
        </div>
    )
}

Card.propTypes = {
    card_id: PropTypes.number,
    message: PropTypes.string,
    likes_count: PropTypes.number,
    onUpdate: PropTypes.func
};

export default Card 

