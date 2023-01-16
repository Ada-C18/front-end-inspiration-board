import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardForm from "./CardForm";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const addNewCard = () => {
    /* TODO */
  };

  const getCardList = () => {
    if (props.currentBoard)
      axios
        .get(`${BACKEND_URL}/boards/${props.currentBoard}/cards`)
        .then((result) => {
          setCardList(result.data);
        });
    else setCardList([]);
  };

  useEffect(getCardList, [props.currentBoard]);

  const cards = cardList.map((card) => {
    return (
      <Card key={card.id} message={card.message} likes={card.likes}></Card>
    );
  });

  return (
    <section>
      <h2>Board Name</h2>
      <div>
        {cards}
        <CardForm addNewCard={addNewCard}></CardForm>
      </div>
    </section>
  );
};

export default Board;
