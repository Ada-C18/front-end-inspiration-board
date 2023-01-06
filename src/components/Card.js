import { useState } from "react";
const Card = (props) => {
    const returnedCards = props.cards.map((card) => {
        console.log(card)
        // onclick event, the function and id to send to the function
        return (
        <p key={card.id} onClick={() => props.onBoardClicked(card.id)}>
        {/* // <p key={card.id}> */}
            {card.message}
        </p>
        );
    });

    return (
        <div>
        {/* <h1> {props.board}</h1> */}
        {returnedCards}
        </div>
    );
};

export default Card;