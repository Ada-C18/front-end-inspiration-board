import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({ cards }) => {
  if (cards) {
    return (
      <div className="cardList">
        <h2>Card List</h2>
        {[...cards].map((card) => (
          <div className="cardListItem" key={card.id} id={card.id}>
            <div className="cardMessage">{card.message}</div>
            <div className="cardLikes">{card.likes_count}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return "";
  }
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
