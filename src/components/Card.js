
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import './Card.css';

const Card = ({id, title, owner, message, deleteCard}) => {

        const [likeCount, setLikeCount] = useState(0);
        const updateLikes = () => {
            setLikeCount(likeCount+1);
        };

    return (
        <div>
            <p> {message} </p>
            <p onClick={updateLikes}>{likeCount} ❤️</p>
            <button onClick={()=>deleteCard(id)}> Delete </button>
            
        </div>
        )  
    }

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    deleteCard:PropTypes.func.isRequired,
};

export default Card;

