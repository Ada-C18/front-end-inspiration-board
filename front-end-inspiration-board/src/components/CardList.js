import PropTypes from "prop-types";
import Card from "./Card";

function CardList(props) {
  const cardComponents = [];

  for (const card of props.cardsList) {
    cardComponents.push(
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes_count={card.likes_count}
        increaseLikes={props.increaseLikes}
        deleteCard={props.deleteCard}
      />
    );
  }

  return <>{cardComponents}</>;
}

CardList.propTypes = {
  cardsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number,
    })
  ),
  increaseLikes: PropTypes.func.isRequired,
};

export default CardList;
