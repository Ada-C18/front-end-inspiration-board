import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardForm from "./CardForm";
import "./Board.css";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const addNewCard = (message) => {
    axios
      .post(`${BACKEND_URL}/boards/${props.currentBoard}/cards`, { message })
      .then((response) => {
        // const cards = [...cardList];
        // cards.push(response.data.card);
        // setCardList(cards);
        getCardList();
        console.log("Response is:", response);
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Unable to create new card");
      });
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
    setCardFormVisible(!cardFormVisible);

  const cards = cardList.map((card) => {
    return (
      <Card key={card.id} message={card.message} likes={card.likes}></Card>
    );
  });

  const cardForm = props.currentBoard ? (
        <CardForm
          visible={cardFormVisible}
          toggleVisible={toggleCardFormVisible}
          addNewCard={addNewCard}
        ></CardForm>
  ) : "";

  return (
    <section id="board">
      <h2>{props.currentBoardName}</h2>
      <div className="card-list">
        {cards}
        {cardForm}
      </div>
    </section>
  );
};

export default Board;
