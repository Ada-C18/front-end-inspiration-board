import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({ title, owner, cards, likeCard }) => {
  const clickLike = (id) => likeCard(parseInt(id));
  return [...cards].map((card) => (
    <div className="card" key={card.card_id} id={card.card_id}>
      <div className="cardMessage">{card.message}</div>
      <div className="cardLikes">
        Likes: <span className="cardLikesCount">{card.likes_count}</span>
        <button
          className="cardLikeIcon"
          onClick={() => clickLike(card.card_id)}
        >
          ➕
        </button>
      </div>
    </div>
  ));
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
