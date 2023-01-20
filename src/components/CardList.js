import axios from 'axios';
import Card from './Card';
import { useState, useEffect } from 'react';
import NewCard from './NewCard';

const url = 'http://127.0.0.1:5000'

const CardList = (props) => {


    const cardElements = props.cardsData.map((card) => {
        return (<Card card={card}
            plusOneCardItem={props.plusOneCardItem}
            deleteCardItem={props.deleteCardItem}
            likes={card.likes}
            //passing it as a prop to card
        ></Card>)
    })


    return (
        <section className='cards__container'>
            <section>
                <h2>Cards for {props.board.title}</h2>
                <div className='card-items__container'>
                    {cardElements}
                </div>
            </section>
        </section>
        
    )
};

export default CardList;