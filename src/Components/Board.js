import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardForm from "./CardForm";
import "./Board.css";

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

  const [cardFormVisible, setCardFormVisible] = useState(false);
  const toggleCardFormVisible = () =>
    setCardFormVisible(cardFormVisible ? false : true);

  const cards = cardList.map((card) => {
    return (
      <Card key={card.id} message={card.message} likes={card.likes}></Card>
    );
  });

  return (
    <section id="board">
      <h2>{props.currentBoardName}</h2>
      <div className="card-list">
        {cards}
        <CardForm
          visible={cardFormVisible}
          toggleVisible={toggleCardFormVisible}
          addNewCard={addNewCard}
        ></CardForm>
      </div>
    </section>
  );
};

export default Board;
