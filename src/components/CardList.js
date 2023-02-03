import Card from "./Card";
import PropTypes from "prop-types";
import "./CardList.css";

function CardList(props) {
  const cardComponents = [];
  const selectedBoardId = props.selectedBoardId;
  const cardList = props.cardList;
  const deleteCard = props.deleteCard;

  for (const card of cardList) {
    cardComponents.push(
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        deleteCard={deleteCard}
      />
    );
  }


  if (selectedBoardId) {
    return (
      <div>
        <h2>Cards</h2>
        <ul>{cardComponents}</ul>
      </div>
    );
  }
  return null;
}

CardList.propTypes = {
  selectedBoardId: PropTypes.number,
  deleteCard: PropTypes.func.isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
