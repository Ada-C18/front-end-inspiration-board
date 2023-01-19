import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";
import { useState } from "react";

const CardList = (props) => {
  const cards = props.cards;

  const [sortedCards, setSortedCards] = useState(cards);

  return (
    <div>
      <button
        onClick={() => {
          setSortedCards(
            [...cards].sort((a, b) => {
              // if return value is negative, a comes first
              const aMessage = a.message.toLowerCase();
              const bMessage = b.message.toLowerCase();
              if (aMessage < bMessage) {
                return -1;
              } else if (bMessage < aMessage) {
                return 1;
              } else {
                return 0;
              }
            })
          );
        }}
      >
        Sort Alphabetically
      </button>
      <button
        onClick={() => {
          setSortedCards(
            [...cards].sort((a, b) => {
              // if return value is negative, a comes first
              if (a.likes < b.likes) {
                return -1;
              } else if (b.likes < a.likes) {
                return 1;
              } else {
                return 0;
              }
            })
          );
        }}
      >
        {" "}
        Sort by Likes{" "}
      </button>
      <button
        onClick={() => {
          setSortedCards(
            [...cards].sort((a, b) => {
              // if return value is negative, a comes first
              if (a.id < b.id) {
                return -1;
              } else if (b.id < a.id) {
                return 1;
              } else {
                return 0;
              }
            })
          );
        }}
      >
        {" "}
        Sort by ID{" "}
      </button>

      <div className="card_container">
        {sortedCards.map((card, id) => (
          <Card
            id={card.id}
            likes={card.likes}
            message={card.message}
            key={id}
            onDeleteCard={props.onDeleteCard}
          />
        ))}
      </div>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  onDeleteCard: PropTypes.func.isRequired,
};
export default CardList;
