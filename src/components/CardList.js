import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = (props) => {
  const getCardListJSX = () => {
    return props.cardListData.map((card) => {
      if (card.board_id === props.boardId) {
        return (
          <Card
            className="card-item"
            key={card.id}
            card={card}
            id={card.id}
            message={card.message}
            likes_count={card.likes_count}
            increaseLikesCount={props.increaseLikesCount}
            deleteCard={props.deleteCard}
          />
        );
      }
    });
  };

  return (
    <section className="cardlist-container">
      <div className="cards-list-div">
        <ul className="cards-holder">{getCardListJSX(props)}</ul>
      </div>
    </section>
  );
};

CardList.propTypes = {
  selectedBoardName: PropTypes.string,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
