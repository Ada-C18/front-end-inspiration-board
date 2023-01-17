import PropTypes from "prop-types";

import Card from "./Card";

function CardList(props) {
  const cardComponents = [];
  const cardList = props.cardList;

  for (const card of cardList) {
    cardComponents.push(
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        selected={card.selected}
        selectCard={props.selectCard}
        unselectCard={props.unselectCard}
      />
    );
  }

  return <div>{cardComponents}</div>;
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  selectCard: PropTypes.func.isRequired,
  unselectCard: PropTypes.func.isRequired,
};

export default CardList;
