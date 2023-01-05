import Card from "./Card";
import PropTypes from "prop-types";

function CardList(props) {
  const cardComponents = [];
  const selectedBoardId = props.selectedBoardId;
  const cardList = props.cardList;
  const deleteCard = props.deleteCard;

  for (const card of cardList) {
    if (card.boardId === selectedBoardId) {
      cardComponents.push(
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          deleteCard={deleteCard}
        />
      );
    }
  }
  return (
    <div>
      <ul>{cardComponents}</ul>
    </div>
  );
}

CardList.propTypes = {
  selectedBoardId: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
