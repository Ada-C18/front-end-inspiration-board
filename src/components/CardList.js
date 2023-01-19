import axios from 'axios';
import Card from './Card';
import { useState, useEffect } from 'react';
import NewCard from './NewCard';

const url = 'http://127.0.0.1:5000'

const CardList = (props) => {
    
    const [cardsData, setCardsData] = useState([]);

    useEffect (() => {
        axios.get(`${url}/boards/${props.board.board_id}/cards`).then((response) => {
            setCardsData(response.data.cards);
        }).catch((error) => {
            console.log('Error: Couldn\'t get all cards', error)
            alert('Couldn\'t get all cards')
        });
    }, [props.board]);

    const deleteCardItem = (card) => {
        axios.delete(`${url}/cards/${card.card_id}`).then((response) => {
            const newCardsData = cardsData.filter((existingCard) => {
                return existingCard.card_id !== card.card_id
            })
            setCardsData(newCardsData)
        }).catch((error) => {
            console.log('Error: Couldn\'t delete card', error)
            alert('Couldn\'t delete card')
        })
    }

    const cardElements = cardsData.map((card) => {
        return (<Card card={card}
            // plusOneCardItem={plusOneCardItem}
            deleteCardItem={deleteCardItem}
        ></Card>)
    })

    const postNewCard = (message) => {
        axios.post(`${url}/boards/${props.board.board_id}/cards`, {message}).then((response) => {
            const cards = [...cardsData];
            cards.push(response.data.card);
            setCardsData(cards)
        }).catch((error) => {
            console.log('Error: Couldn\'t create card', error)
            alert('Couldn\'t create card')
        });
    };

    return (
        <section className='cards__container'>
            <section>
                <h2>Cards for {props.board.title}</h2>
                <div className='card-items__container'>
                    {cardElements}
                </div>
            </section>
            <NewCard postNewCard={postNewCard}></NewCard>
        </section>
        
    )
};

export default CardList;