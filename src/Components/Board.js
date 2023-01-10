import { useState } from "react";
import Card from "./Card";
import CardForm from "./CardForm";

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const addNewCard = () => {
    /* TODO */
  };

  const cards = cardList.map((card) => {
    return <Card card={card}></Card>;
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
