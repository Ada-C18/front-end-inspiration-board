import "./SelectedBoard.css";
import CardView from "./CardView.js";

const SelectedBoard = (props) => {
  const cards = props.cards;

  const getCardViewComponentList = (cards) => {
    return cards.map((card) => {
      return (
        <li key={card.id}>
          <CardView
            id={card.id}
            message={card.message}
            likes={card.likes}
            cardColor={props.cardColor}
            shadowClass={card.id % 2 === 1 ? "pink-shadow" : "teal-shadow"}
            onDeleteCard={props.onDeleteCard}
            onLikeCard={props.onLikeCard}
            boardId={card.board_id}
          />
        </li>
      );
    });
  };

  return (
    <div>
      <div id="sort-div">
        <select id="sort-dropdown">
          <option value="sort by number of likes">
            Sort by: Number of likes
          </option>
          <option value="sort alphabetically">Sort: Alphabetically</option>
          <option value="sort by id">Sort by: ID</option>
        </select>
      </div>
      <ul id="board-flex-container"> {getCardViewComponentList(cards)} </ul>
    </div>
  );
};

export default SelectedBoard;
