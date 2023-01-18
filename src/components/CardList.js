import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({ title, owner, cards, likeCard }) => {
  const clickLike = (id) => likeCard(parseInt(id));
  return (
    <section className="cardList">
      {[...cards].map((card) => (
        <div className="card" key={card.card_id} id={card.card_id}>
          <div className="cardMessage">{card.message}</div>
          <span className="cardLikes">{card.likes_count}</span>
          <span
            className="cardLikeIcon"
            onClick={() => clickLike(card.card_id)}
          >
            {card.liked ? "❤️" : "🖤"}
          </span>
        </div>
      ))}
    </section>
  );
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
