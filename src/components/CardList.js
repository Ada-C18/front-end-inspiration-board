import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ board }) => {
  const [cardsList, setCardsList] = useState([]);

  const getAllCards = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board.id}/cards`)
      .then((response) => {
        console.log(response.data);
        setCardsList(response.data.cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getAllCards, [board]);

  const updateLikedCard = (cardId, increasedLike) => {
    const newCardsList = [];
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/${increasedLike}`
      )
      .then((response) => {
        for (const card of cardsList) {
          if (card.id !== cardId) {
            newCardsList.push(card);
          } else {
            const newCard = {
              ...card,
              likes_count: increasedLike,
            };
            newCardsList.push(newCard);
          }
        }
        setCardsList(newCardsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then(() => {
        const newCardsList = [];
        for (const card of cardsList) {
          if (card.id !== cardId) {
            newCardsList.push(card);
          }
        }
        setCardsList(newCardsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Need to add key here???
  const cardsComponent = cardsList.map((card) => {
    return (
      <Card
        card={card}
        updateLikedCard={updateLikedCard}
        deleteCard={deleteCard}
      />
    );
  });

  return (
    <section className="cardList-container">
      <h1>Cards for {board.title}</h1>
      <div className="cardListInner">{cardsComponent}</div>
    </section>
  );
};
CardList.propTypes = {
  board: PropTypes.object.isRequired,

};
export default CardList;
