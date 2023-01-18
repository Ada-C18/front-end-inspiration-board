import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const CardsList = (props) => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`
      )
      .then((response) => {
        setCardsData(response.data);
        console.log("API is working!!!!", response.data);
      })
      .catch((error) => {
        console.log(
          "API broken :(. no 2xx status code",
          error.response.data.status
        );
        console.log("Response to broken api", error.response.data);
      });
  }, [props.board]);

  const plusOneCardItem = (card) => {
    console.log(cardsData);
    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
      .then((response) => {
        const newCardsData = cardsData.map((currentCard) => {
          return currentCard.card_id !== card.card_id
            ? currentCard
            : { ...card, likes_count: card.likes_count + 1 };
        });
        setCardsData(newCardsData);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't +1 the card.");
      });
  };

  const deleteCardItem = (card) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`)
      .then((response) => {
        const newCardsData = cardsData.filter((currentCard) => {
          return currentCard.card_id !== card.card_id;
        });
        setCardsData(newCardsData);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't delete the card.");
      });
  };

  const createNewCard = (cardFormData) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`,
        cardFormData
      )
      .then((response) => {
        console.log("New Card successfully created", response.data.card);
        const cards = [...cardsData];
        cards.push(response.data.card);
        setCardsData(cards);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't create a new card.");
      });
  };

  const cardElements = cardsData.map((card) => {
    return (
      <Card
        card={card}
        plusOneCardItem={plusOneCardItem}
        deleteCardItem={deleteCardItem}
      />
    );
  });

  return (
    <section className="cards__container">
      <section>
        <h2>Create a New Card</h2>
        <NewCardForm createNewCard={createNewCard}></NewCardForm>
        <span onClick={NewCardForm}></span>
      </section>
      <h2>Cards for {props.board.title}</h2>
      <div>{cardElements}</div>
    </section>
  );
};

export default CardsList;
