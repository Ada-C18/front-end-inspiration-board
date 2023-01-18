import React from "react";
import Card from "./Card";
import "./CardList.css";
import PropTypes from "prop-types";

const CardList = (props) => {
  return (
    <ul>
      {props.cardsData.map((card) => (
        <Card
          id={card.id}
          // board_id={card.board_id}
          boardId={card.boardId}
          message={card.message}
          // likes_count={card.likes_count}
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
      // board_id: PropTypes.number.isRequired,
      boardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      // likes_count: PropTypes.number.isRequired,
      likesCount: PropTypes.number.isRequired,

    })
  ),
  handleLikes: PropTypes.func.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
};

export default CardList;
