import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards }) => {
  <div>
    {cards.map((card) => {
      return <Card cardId={card.card_id} message={card.message} />;
    })}
  </div>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
