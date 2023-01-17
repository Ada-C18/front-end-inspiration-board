import React from 'react';
import './CardContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';

// props = cardData
const CardContainer = ({ currentBoard }) => {
    // const cards = props.cards.map((card, i) => {
    //     return <Card
    //     key={i}
    //     message={card.message}
    //     />
    // })
    
    return (
        <section className='all-cards__section'>
            <h2 id='current-board-name'>{currentBoard.title}</h2>
            <div id="card-container-line" />
            <div className='all-cards__container'>
            {/* {cards} */}
            </div>
        </section>
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