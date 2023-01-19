import axios from "axios";
import PropTypes from "prop-types";
import Card from "./Card";
import "./Board.css";

function Board({
  boardId,
  owner,
  title,
  cards,
  selectedBoard,
  setSelectedBoard,
  displayAllCardsForOneBoard,
  updateLikes,
}) {
  // const cardComponents = [];
  // // console.log(`Cards${cards}`);

  // for (const card of cards) {
  //   // console.log(`Printing card data from board ${card}`);
  //   cardComponents.push(
  //     <Card
  //       key={card.card_id}
  //       cardId={card.card_id}
  //       message={card.message}
  //       likes_count={card.likes_count}
  //       updateLikes={updateLikes}
  //     />
  //   );
  // }
  // console.log("cardComponents", cardComponents);

  const URL = "http://127.0.0.1:5000/board";
  const currentBoard = (boardId) => {
    axios.get(`${URL}/${boardId}`).then((response) => {
      console.log("Calling currentBoard", response.data);
      const currentBoardCamel = {
        ...response.data,
        boardId: response.data.board_id,
      };
      setSelectedBoard(currentBoardCamel);
    });
  };

  return (
    <div>
      <li
        onClick={() => {
          displayAllCardsForOneBoard(boardId);
          currentBoard(boardId);
        }}
      >
        {title} | {owner}
        {/* {cardComponents} */}
      </li>
    </div>
  );
}
Board.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
  selectedBoard: PropTypes.shape({
    boardId: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }),
  updateLikes: PropTypes.func.isRequired,
  displayAllCardsForOneBoard: PropTypes.func.isRequired,
};

export default Board;
