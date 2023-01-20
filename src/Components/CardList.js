import React from "react";
import Card from "./Card";
import "./CardList.css";
import PropTypes from "prop-types";

const CardList = (props) => {
  return (
    <ul className="card__list">
      {props.cardsData.map((card) => (
        <Card
          id={card.id}
          boardId={card.boardId}
          message={card.message}
          likesCount={card.likesCount}
          key={card.id}
          handleLikes={props.handleLikes}
          handleDeleteCard={props.handleDeleteCard}
        />
      ))}
    </ul>
  );
};

CardList.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      boardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ),
  handleLikes: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
};

export default CardList;
