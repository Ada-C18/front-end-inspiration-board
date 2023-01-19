import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const CardList = (props) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`
      )
      .then((response) => {
        // console.log('Response', response)
        setCardData(response.data.cards);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't get cards for this board.");
      });
  }, [props.board]);

<<<<<<< HEAD
  const deleteCard = (card) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${props.card.id}`)
      .then((response) => {
=======
    const deleteCard = (card) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`)
        .then((response) => {
>>>>>>> a52376854212f3c5956928671877bc913936247f
        const newCardData = cardData.filter((currentCard) => {
          return currentCard.id !== card.id;
        });
        setCardData(newCardData);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete the card.");
      });
  };

  const onLikeClick = (card) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
      .then((response) => {
        const newCardData = cardData.map((currentCard) => {
          return currentCard.card_id !== card.card_id
            ? currentCard
            : { ...card, likes_count: card.likes_count + 1 };
        });
        setCardData(newCardData);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't like the card.");
      });
  };

  const cardElements = cardData.map((card) => {
    return (
      <Card
        card={card}
        onLikeClick={onLikeClick}
        deleteCard={deleteCard}
      ></Card>
    );
  });

<<<<<<< HEAD
  const postNewCard = (message) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/${props.board.board_id}/cards`,
        { message }
      )
      .then((response) => {
=======
    const cardElements = cardData.map((card) => {
        return (
        <Card
            card={card}
            onLikeClick={onLikeClick}
            deleteCard={deleteCard}
        ></Card>
        )
    });

    const postNewCard = (message) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`, {message}
        ).then((response) => {
>>>>>>> a52376854212f3c5956928671877bc913936247f
        const cards = [...cardData];
        cards.push(response.data.card);
        setCardData(cards);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new card.");
      });
  };
  //
  return (
    <section className="cards__container">
      <section>
        <span>
          <h2>
            Cards for<h3 class="text-effect">{props.board.title}</h3>
          </h2>
        </span>

        <div className="card-items__container">{cardElements}</div>
      </section>
      <NewCardForm postNewCard={postNewCard}></NewCardForm>
    </section>
  );
};

export default CardList;
