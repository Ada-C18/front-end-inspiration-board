import React from "react";

const Card = (props) => {

    return (
    <div className='single-card'>
        <p className='card-message'>{props.card.message}</p>
        <ul className='card__controls'>
            <li><p>{props.card.likes_count}</p></li>
            <li><p onClick={() => props.onLikeClick(props.card)}>+💖</p></li>
            <li><p className='card__delete' onClick={() => props.deleteCard(props.card)}>Delete Card</p></li>
        </ul>
    </div>
    );
};

export default Card;
