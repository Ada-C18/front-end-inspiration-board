import React from "react";

const Card = (props) => {

    return (
    <div className='single-card'>
        {props.card.message}
        <ul className='card__controls'>
            <li>{props.card.likes_count}</li>
            <li><p onClick={() => props.onLikeClick(props.card)}>+💖</p></li>
            <li><p className='card__delete' onClick={() => props.deleteCardItem(props.card)}>Delete Card</p></li>
        </ul>
    </div>
    );
};

export default Card;
