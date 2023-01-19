import React from "react";
import Card from "./Card";
import "./CardList.css";
import PropTypes from "prop-types";

const CardList = (props) => {
  console.log(props);
  const deleteCard = props.deleteCard;

  const cardComponents = props.cardEntries.map((cardEntry) => {
    return (
      <li key={cardEntry.id}>
        <Card
          id={cardEntry.id}
          message={cardEntry.message}
          like_count={cardEntry.like_count}
          deleteCard={deleteCard}
        />
      </li>
    );
  });

  return (
    <section>
      <ul>{cardComponents}</ul>
    </section>
  );
};

CardList.propTypes = {
  //Fill with correct proptypes
  cardEntries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
