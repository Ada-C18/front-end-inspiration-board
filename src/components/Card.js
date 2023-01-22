import React from "react";
import "./Card.css";


const Card = ({ id, message, likeCount, onDeleteCard, incrementLikeCount }) => {

    const handleClick = () => {onDeleteCard(id)};
    const withClick = () => {incrementLikeCount(id)}


    return (
        <div className="card__div">
            <h3 className="card-message">{message}</h3>
            <h4 onClick={withClick} className="card-like-count"> + {likeCount}💕</h4>
            <button onClick={handleClick} className="delete-card__button">Delete Card</button>
           
        </div>
    );
    };


export default Card;
