import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  const card = props.cards.map((card) => {
    return (
      <li key={card.card_id}>
        <Card
          cardId={card.card_id}
          boardId={card.board_id}
          message={card.message}
          likes_count={card.likes_count}
          updateCardsData={props.updateCards}
          deleteCard={props.deleteCard}
        ></Card>
      </li>
    );
  });

  return (
    <section>
      {props.selectedBoard && (
        <div>
          <h1>Cards for {props.boardName}</h1>
          <section>{card}</section>
        </div>
      )}
    </section>
  );
};

CardList.propTypes = {
  selectedBoard: PropTypes.number,
  boardName: PropTypes.string,
  cards: PropTypes.array,
  updateCardsData: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default CardList;
