import Card from "./Card";
// import PropTypes from "prop-types";

function CardList(props) {
  const cardComponents = [];
  const selectedBoardId = props.selectedBoardId;
  const cardList = props.cardList;

  for (const card of cardList) {
    if (card.boardId === selectedBoardId) {
      cardComponents.push(
        <Card key={card.id} id={card.id} message={card.message} />
      );
    }
  }
  return <div>{cardComponents}</div>;
}
export default CardList;
