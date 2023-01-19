import Card from "./Card";
import "../styles/CardList.css";
import PropTypes from "prop-types";

const CardList = ({ cardList, deleteCard, countLikesTotal }) => {
  const cardComponents = cardList.map((card) => {
    return (
      <div className="card-item" key={card.id}>
        <Card
          id={card.id}
          message={card.message}
          likes={card.likes}
          deleteCard={deleteCard}
          countLikesTotal={countLikesTotal}
        />
      </div>
    );
  });

  return <div className="card-items__container">{cardComponents}</div>;
};

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number,
    })
  ),
  deleteCard: PropTypes.func,
  countLikesTotal: PropTypes.func,
};

export default CardList;
