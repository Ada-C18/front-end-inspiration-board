import PropTypes from "prop-types";
import Card from "./Card";

function CardList(props) {
  const cardComponents = [];

  for (const card of props.cardsList) {
    cardComponents.push(
      <Card key={card.id} id={card.id} message={card.message} />
    );
  }

  return <>{cardComponents}</>;
}

CardList.propTypes = {
  cardsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
