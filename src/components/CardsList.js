import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const CardsList = (props) => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log("API is working!!!!", response.data);
      })
      .catch((error) => {
        console.log(
          "API broken :(. no 2xx status code",
          error.response.data.status
        );
        console.log("Repsonse to broken api", error.response.data);
      });
  }, []);
  const [cardsData, setCardsData] = useState([]);

  const createNewCard = (newCard) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`,
        newCard
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
  return (
    <section>
      <NewCardForm createNewCard={{ createNewCard }}></NewCardForm>
    </section>
  );
};

export default CardsList;
