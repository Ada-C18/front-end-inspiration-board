import PropTypes from "prop-types";

import "./Card.css";

function Card(props) {
  const cardId = props.id;
  const cardMessage = props.message;
  const selectCard = props.selectCard;
  const unselectCard = props.unselectCard;

  const toggleSelected = (cardId) => {
    if (props.selected === false) {
      selectCard(cardId);
    } else {
      unselectCard(cardId);
    }
  };

  return (
    <div>
      {/* <h2 className="board__name">{boardTitle}</h2> */}
      <ol>
        {/* <li>ID: {boardId}</li> */}
        <li onClick={() => toggleSelected(cardId)}>{cardMessage}</li>
        {/* <li>Name: {boardName}</li> */}
      </ol>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  selectCard: PropTypes.func.isRequired,
  unselectCard: PropTypes.func.isRequired,
};
export default Card;
