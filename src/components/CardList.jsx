import React from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { useState, useEffect } from "react";
import axios from "axios";

const CardList = (props) => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
        .then((response) => {
        console.log('Response', response)  
        setCardData(response.data);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t get cards for this board.');
        });
    }, [props.board]);

    const deleteCard = (card) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.card.id}`)
        .then((response) => {
        const newCardData = cardData.filter((currentCard) => {
            return currentCard.id !== card.id;
        });
        setCardData(newCardData);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t delete the card.');
        });
    };

    const addCard = (card) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.card.id}/like`)
        .then((response) => {
        const newCardData = cardData.map((currentCard) => {
            return currentCard.id !== card.id ? currentCard : {... card, likes: card.likes + 1}
        });
        setCardData(newCardData);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t +💖 the card.');
        });
    };

    const cardElements = cardData.map((card) => {
        return (
        <Card
            card={card}
            addCard={addCard}
            deleteCard={deleteCard}
        ></Card>
        )
    });

    const postNewCard = (message) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/${props.board.id}/cards`, {message}
        ).then((response) => {
        const cards = [...cardData];
        cards.push(response.data.card);
        setCardData(cards);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t create a new card.');
        });
    };

    return (
        <section className='cards__container'>
        <section>
            <h2>Cards for {props.board.title}</h2>
            <div className='card-data'>
            {cardElements}
            </div>
        </section>
        <NewCardForm
            postNewCard={postNewCard}
        ></NewCardForm>
        </section>
    )
};

export default CardList;
