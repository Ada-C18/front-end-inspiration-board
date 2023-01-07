import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './CardList.css'
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
  },[] );


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

  // const [data, setData] = useState([]);
  // const [sortType, setSortType] = useState('albums');

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       alphabetically: 'message',
  //       likes: 'Likes_count',
  //       id: 'id',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...cards].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     console.log(sorted)
  //     setData(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]);


  return (<section className='cards__container'>
        <h2 className='cards__header'>☀️ Messages for {props.board.title} ☀️</h2>
        <div>
          {cards}
        </div>
        {/* Sort by
        <select>
        <option value='alphabetically'>Alphabetically</option>
        <option value='likes'>Likes</option>
        <option value='id'>Order Created</option>
</select>
    <select onChange={(e) => setSortType(e.target.value)}></select> */}
    </section>
    
    )
};


CardList.propTypes = {
  board: PropTypes.object.isRequired,
  card: PropTypes.object,
  handleLikes: PropTypes.func,
  deleteCard: PropTypes.func,
};


export default CardList;