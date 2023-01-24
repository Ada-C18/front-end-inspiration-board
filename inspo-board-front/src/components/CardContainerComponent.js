import PropTypes from "prop-types";
import Card from "../components/CardComponent.js";
import "./CardContainerComponent.css";

const CardContainer = (props) => {
  const cardList = props.cardList;
  const boardTitle = props.boardTitle;
  const deleteCard = props.deleteCard;
  const likeCard = props.likeCard;
  const cardRenders = cardList.map((card) => {
    return (
      <div key={card.id}>
        <Card
          id={card.id}
          message={card.message}
          likes={card.likes}
          deleteCard={deleteCard}
          likeCard={likeCard}
        />
      </div>
    );
  });

  return (
    <div>
      <h2>
        Cards For <span className="board-title">{boardTitle}</span>
      </h2>
      <div className="inner-card-container">{cardRenders}</div>
    </div>
  );
};

CardContainer.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
  boardTitle: PropTypes.string,
  likeCard: PropTypes.func.isRequired,
};

export default CardContainer;
