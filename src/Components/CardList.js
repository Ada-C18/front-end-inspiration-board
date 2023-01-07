import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import PropTypes from 'prop-types';


const CardList = (props) => {

  const [cardsData, setCardsData] = useState([]);

  const getAllCardsApi = async () => {
    const response = await  axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/${props.board.title}`)
    return response.data.board.cards;
  };

  useEffect(() => {
    const getAllCards = async () => {
      const cards = await getAllCardsApi();
      setCardsData(cards);
    };
    getAllCards();
  }, );


  const deleteCard = async (card) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`);
    const newCardsData = cardsData.filter((existingCard) => {
      return existingCard.card_id !== card.card_id;
    });
    setCardsData(newCardsData);
  };


  const handleLikes = async (card) => {
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
    const newCardsData = cardsData.map((existingCard) => {
      return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
      });
    setCardsData(newCardsData);
  };

  const cards = cardsData.map((card) => {
    return (<Card
        card={card}
        handleLikes={handleLikes}
        deleteCard={deleteCard}/>)
  });


  return (<section className='cards__container'>
        <h2>Cards for {props.board.title}</h2>
        <div>
          {cards}
        </div>
    </section>
    )
};


CardList.propTypes = {
  board: PropTypes.object.isRequired,
  handleLikes: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};


export default CardList;