import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardList = ({cards}) => {
    const getCardListJSX = (cards) => {
        return cards.map((card) => {
            return (
                <Card 
                    key={card.id}
                    id={card.id}
                    message = {card.message}
                    likesCount = {card.likesCount}
                />
            );
        });
    }; 
    return <ul className="cards__list no-bulltet">{getCardListJSX(cards)}</ul>;
};  

CardList.prototypes =  {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            message: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default CardList;