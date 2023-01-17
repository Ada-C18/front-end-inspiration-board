import React from 'react';
import './CardContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ currentBoard, /* getCardsCallback */ }) => {
    // const cards = getCardsCallback(currentBoard.id);
    // const getAllCardsJSX = (cards) => {
    //     return cards.map((card) => {
    //         return (
    //             <Card
    //             key={card.id}
    //             id={cards.id}
    //             message={cards.message}
    //             likeCount={cards.likes_count}
    //             boardId={cards.board_id}
    //             />
    //         );
    //     });
    // };
    
    return (
        <section className='all-cards__section'>
            <h2 id='current-board-name'>{currentBoard.title}</h2>
            <div id="card-container-line" />
            <div className='all-cards__container'>{/* {getAllCardsJSX(cards)} */}</div>
        </section>
    ) 
};

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
    }))
};

export default CardContainer;