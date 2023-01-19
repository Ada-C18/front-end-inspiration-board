import React from "react";

const Card = (props) => {
    return (
        <div className="container">
        {props.card.message}
        <ul className="content">
            <li>{props.card.likes_count}</li>
            <li>
            <p onClick={() => props.onLikeClick(props.card)}>+💖</p>
            </li>
            <li>
            <p
                className="card-item__delete"
                onClick={() => props.deleteCardItem(props.card)}
            >
                Delete Card
            </p>
            </li>
        </ul>
        </div>
    );
};

export default Card;
