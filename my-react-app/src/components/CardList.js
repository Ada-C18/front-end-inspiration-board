import PropTypes from "prop-types";

import Card from "./Card";

function CardList(props) {
  const cardComponents = [];
  const cardList = props.cardList;
  const selectedBoard = props.selectedBoard;

  for (const card of cardList) {
    if (card.selected === true) {
      //ADDED -- need to figure out how card.board_id would be changed using cardBoardMap
      cardComponents.push(
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          selected={card.selected}
          liked={card.liked}
          numOfLikes={card.likes_count}
          selectCard={props.selectCard}
          unselectCard={props.unselectCard}
          updateLike={props.updateLike}
          selectedBoard={selectedBoard}
          deleteCard={props.deleteCard}
        />
      );
    }
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
