import PropTypes from "prop-types";

import "./Card.css";

function Card(props) {
  const cardId = props.id;
  const cardMessage = props.message;
  const selectCard = props.selectCard;
  const unselectCard = props.unselectCard;
  const liked = props.liked;
  const updateLike = props.updateLike;

  const toggleSelected = (cardId) => {
    if (props.selected === false) {
      selectCard(cardId);
    } else {
      unselectCard(cardId);
    }
  };

  let numOfLikes = 0;
  if (liked === true) {
    numOfLikes += 1;
  }

  const buttonContent = numOfLikes > 0 ? "💗" : "🤍";

  return (
    <div>
      {/* <h2 className="board__name">{boardTitle}</h2> */}
      <h3>{cardMessage}</h3>
      <p>{numOfLikes}</p>
      <button onClick={() => updateLike(cardId)}>{buttonContent} </button>
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
