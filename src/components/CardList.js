import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({ title, owner, cards }) => {
  return (
    <section className="cardList">
      <h2>
        Cards on {title} for {owner}
      </h2>
      {[...cards].map((card) => (
        <div className="cardListItem" key={card.id} id={card.id}>
          <div className="cardMessage">{card.message}</div>
          <div className="cardLikes">{card.likes_count}</div>
        </div>
      ))}
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
