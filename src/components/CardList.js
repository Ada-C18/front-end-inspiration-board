import './CardList.css';
import Card from './Card';
import { useState } from 'react';

const CardList = (props) => {

    const cardComponents = props.cardData.map(card => {
        return (
            <div key={card.card_id}>
                <Card 
                card_id={card.card_id}
                message={card.message}
                likes_count={card.likes_count}
                updateCard={props.updateCard}
                />
            </div>
        )
    });

    return (
        <section className='card-wrap'>
            {cardComponents}
        </section>
    )
}

export default CardList;