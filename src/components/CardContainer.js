import React from 'react';
import './CardContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';

// props = cardData
const CardContainer = (props) => {
    const cards = props.cards.map((card, i) => {
        return <Card
        key={i}
        message={card.message}
        />
    })
    
    return (
        <div>
            {cards}
        </div>
    ) 
};

// add like count later
CardContainer.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
    }))
};

export default CardContainer;