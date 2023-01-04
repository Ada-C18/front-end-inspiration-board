import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import { useState } from "react";

const boardsData = [
  {
    id: 1,
    title: "hello world",
    owner: "123",
  },
  {
    id: 2,
    title: "hello east coast",
    owner: "456",
  },
];

function App() {
  const [boardData, setBoardData] = useState(boardsData);
  const [cardData, setCardData] = useState([]);

  const updateBoardData = (updatedBoard) => {
    const boards = boardData.map((board) => {
      if (board.id === updatedBoard.id) {
        return updatedBoard;
      } else {
        return board;
      }
    });
    setBoardData(boards);
  };

  const updateCardData = (updatedCard) => {
    const cards = cardData.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      } else {
        return card;
      }
    });
    setCardData(cards);
  };

  return (
    <div>
      <header>INSPIRATION BOARD</header>
      <section>
        <h1> Boards </h1>
        <Board boards={boardData}></Board>
        <h1> Selected Board </h1>
        <h1> Create A New Board </h1>
        <NewBoardForm onUpdateBoardData={updateBoardData} />
      </section>
      <section>
        <h1 className="card"> Cards for Reminders </h1>
        {/* display a list of cards */} {cardData}
        <h1 className="card"> Create a New Card</h1>
        <NewCardForm onUpdateCardData={updateCardData} />
      </section>
      <footer>
        <p> Click here to delete all boards and cards</p>
      </footer>
    </div>
  );
}

export default App;
