import React, { useState, useEffect } from 'react';
import Board from './Card';
import CardForm from './CardForm';
import axios from 'axios';

const REACT_APP_BACKEND_URL = 'http://localhost:5000';

const cardApiToJson = (card) => {
  const {
    card_id: cardId,
    board_id: boardId,
    likes_count: likesCount,
    message,
    board,
  } = card;
  return { cardId, boardId, likesCount, message, board };
};

const addCardAPI = (card) => {
  return axios
    .post(`${REACT_APP_BACKEND_URL}/boards/${getCardsAPI}/cards`, card)
    .then((response) => response.data.board.card)
    .catch((err) => console.log(err));
};

const getCardsAPI = async (cards) => {
  try {
    const response = await axios.get(
      `${REACT_APP_BACKEND_URL}/boards/${cards.boardId}/cards`
    );
    return response.data.map(cardApiToJson);
  } catch (err) {
    console.log(err);
    throw new Error('Nope, get your cards');
  }
};

const BoardList = () => {
  const [cards, setCards] = useState([]);

  const refreshCards = async () => {
    try {
      const cards = await getCardsAPI();
      setCards(cards);
    } catch (err) {
      console.log(err.message);
      throw new Error('Can not refresh cards!');
    }
  };

  useEffect(() => {
    refreshCards();
  }, []);

  const onSubmitCardForm = (card) => {
    addCardAPI(card)
      .then((newCard) => {
        setCards((prevCard) => [...prevCard, newCard]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Board cards={cards} />
      <CardForm className='card_board' onSubmitCardForm={onSubmitCardForm} />
    </div>
  );
};

export default BoardList;
