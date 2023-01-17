import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";


const CardList = ({ board }) => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board.id}/cards`)
    .then((response) => {
      console.log(response.data);
      setCardsList(response.data.cards)
    })
    .catch( (error) => {
      console.log(error);
    });
  }, [board]);


  const updateLikedCard = (cardId, increasedLike) => {
    const newCardsList = [];
    axios
    .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/${increasedLike}`)
    .then((response)=> {
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

  // Do we need to get all cards again with this?
  const deleteCard = (cardId) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
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
      <Card card={card} updateLikedCard={updateLikedCard} deleteCard={deleteCard} />
    );
  });


  return (
    <section className="cardList-container">
      <h1>Cards for {board.title}</h1>
      <div className="cardListInner">
        {cardsComponent}
      </div>
    </section>
  );
};

export default CardList;