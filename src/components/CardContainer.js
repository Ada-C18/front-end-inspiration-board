import React from "react";
import "./CardContainer.css";
import Card from "./Card";
import axios from "axios";


const url = "https://group-4-inspo-board.herokuapp.com"

const CardContainer = ({ currentBoard, cards, onDeleteCard, incrementLikeCount, deleteBoard }) => {
    const getAllCardsJSX = (cards) => {
    const cardsToDisplay = cards.map((card, i) => {
        return (
        <Card
            key={i}
            id={card.id}
            message={card.message}
            likeCount={card.likeCount}
            incrementLikeCount={incrementLikeCount}
            onDeleteCard={onDeleteCard}
        />
        );
    });
        return cardsToDisplay;
    };
    console.log({currentBoard},"console.log(cardcontainer)")
   
    return (
        <section className="all-cards__section">
            <h2 id="current-board-name">Current Board: {currentBoard.title}</h2>
            <div id="card-container-line" />
            <div className="all-cards__container">{getAllCardsJSX(cards)}</div>
            <button onClick={deleteBoard}>Delete The Board</button>
        </section>
    );
    };

export default CardContainer;
