import PropTypes from "prop-types";
import CardList from "./CardList";
import { useState } from "react";
import Card from "./Card";
import "./Board.css";

// loop through boards and get card list out, pass to cardList
// returns h2 with title, h4 with owner, a card element for cards

const Board = (props) => {
  // const [cardList, setCardList] = useState([]);
  const boards = props.boards;
  const boardComponents = [];
  //   for (const board of boards) {
  //     cardsList.push(props.getCards(board.id));
  //     boards["cards"] = cardsList;
  //   }
  for (const board of boards) {
    boardComponents.push(
      <div>
        {/* <span>{board.id}</span> */}
        <h1 key={board.id} onClick={() => props.onBoardSelect(board)}>
          {board.title}
        </h1>
        {/* save the id of the board that we click on
                    run fetchAllCards with that id  */}
        {/* handleClick needs to accept id of board using board.id */}

        {/* <CardList cards={board.cards}/> */}
      </div>
    );
  }
  return <div className="board-text-display">{boardComponents}</div>;
};

Board.propTypes = {
  boards: PropTypes.array.isRequired,
  //   id: PropTypes.number.isRequired,
  //   title: PropTypes.string,
  //   owner: PropTypes.string,
  //   cards: PropTypes.array,
  // getCards: PropTypes.func,
  onBoardSelect: PropTypes.func.isRequired,
};

export default Board;
