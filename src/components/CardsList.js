import PropTypes from "prop-types";

import Card from "./Card";
import "./CardsList.css";

const CardsList = ({ cardsList, boardTitle, deleteCard }) => {
  const cardComponents = cardsList.map((card) => {
    return (
      <Card
        cardId={card.card_id}
        message={card.message}

        // likeCount = {card.likesCount}
      />
    );
  });

  return (
    <div className="cards__list">
      <h2>Cards for {boardTitle}:</h2>
      <ul>{cardComponents}</ul>
    </div>
  );
};

CardsList.propTypes = {
  cardsList: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
};

export default CardsList;
