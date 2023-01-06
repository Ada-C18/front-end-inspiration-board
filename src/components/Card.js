import '../styles/Card.css';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import './Card.css';

const Card = ({id, message, likes, deleteCard, countLikesTotal}) => {

        // const [likeCount, setLikeCount] = useState(0);
        // const updateLikes = () => {
        //     setLikeCount(likeCount+1);
        // };

    return (
        <div className="card-item">
            <p> {message} </p>
            <button className="like"
                onClick={() => {
            countLikesTotal(id);
            }}
            >
                <p>❤️</p>
            </button>
            <button className="delete"
                onClick={() => {
            deleteCard(id);
            }}
            >
                <p>delete</p>
            </button>
            {/* <p onClick={updateLikes}>{likeCount} ❤️</p>
            <button onClick={()=>deleteCard(id)}> Delete </button> */}
            
        </div>
        )  
    }

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes : PropTypes.bool,
    deleteCard:PropTypes.func.isRequired,
    countLikesTotal:PropTypes.func.isRequired
};

export default Card;

