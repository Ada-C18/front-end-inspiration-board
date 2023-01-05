import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
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
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  const handleBoardClicked = (id) => {
    const findId = boardData.map((board) => {
      if (id === board.id) {
        setSelectedBoard(board);
      }
    });
  };

  return (
    <div>
      <header>INSPIRATION BOARD</header>
      <section>
        <Board boards={boardData} onBoardClicked={handleBoardClicked} />
        <h1> Select Board</h1>
        <p>{selectedBoard.title}</p>
        <p>{selectedBoard.owner}</p>

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
