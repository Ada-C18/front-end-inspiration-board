import React from "react";
import "./CardContainer.css";
import Card from "./Card";
// import PropTypes from 'prop-types';

const CardContainer = ({ currentBoard, cards }) => {
    const getAllCardsJSX = (cards) => {
    const cardsToDisplay = cards.map((card) => {
        return (
        <Card
            key={card.id}
            id={card.id}
            message={card.message}
            likeCount={card.likeCount}
        />
        );
    });
        return cardsToDisplay;
    };

    return (
        <section className="all-cards__section">
            <h2 id="current-board-name">Current Board: {currentBoard.title}</h2>
            <div id="card-container-line" />
            <div className="all-cards__container">{getAllCardsJSX(cards)}</div>
        </section>
    );
    };

// CardContainer.propTypes = {
//     cards: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         message: PropTypes.string.isRequired,
//     }))
// };

export default CardContainer;
