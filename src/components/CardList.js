import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";
import axios from "axios";

const CardList = (props) => {
  const cards = props.cards;
  return (
    <div className="card_container">
      {cards.map((card, id) => (
        <Card
          id={card.id}
          likes={card.likes}
          message={card.message}
          key={id}
          onDeleteCard={props.onDeleteCard}
        />
      ))}
    </div>
  );
};
CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  onDeleteCard: PropTypes.func.isRequired,
};
export default CardList;
