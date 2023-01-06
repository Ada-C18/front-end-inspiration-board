import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import Card from "./components/Card";
import CardList from "./components/CardList";
import { useState } from "react";
const boardsData = [
  {
    id: 1,
    title: "hello world",
    owner: "123",
    boardClicked: false,
    cards: [
      { id: 1, message: "Today's best card" },
      {
        id: 2,
        message: " Having a good time",
      },
    ],
  },
  {
    id: 2,
    title: "hello east coast",
    owner: "456",
    cards: [
      {
        id: 3,
        message: "Friday vibes",
      },
    ],
  },
];

function App() {
  const [boardData, setBoardData] = useState(boardsData);
  const [cardData, setCardData] = useState(boardData.cards);

  const displayCards = boardData.map((board) => {
    return board.cards.message;
  });

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
        setCardData(board.cards);
      }

      // filter the cards based on id parameter
      //another piece of state for selected cards
    });
  };

  const [showForm, setShowForm] = useState(true);

  const deleteCard = (id) => {
    const newCards = cardData.filter((card) => card.id !== id);
    setCardData(newCards);
    console.log("i am deletCard");
  };

  return (
    <div>
      <header>INSPIRATION BOARD</header>
      <section>
        <Board boards={boardData} onBoardClicked={handleBoardClicked} />
        <h1> Select Board</h1>
        {/* <p>{selectedBoard.title} {selectedBoard.owner}</p> */}
        <p>
          {selectedBoard.id
            ? `${selectedBoard.title}  ${selectedBoard.owner}`
            : "Please select a Board from the Board List!"}
        </p>
        <h1> Create A New Board </h1>
        {showForm && <NewBoardForm onUpdateBoardData={updateBoardData} />}
        <button type="button" onClick={() => setShowForm(!showForm)}>
          {" "}
          {showForm === true ? "Hide New Board Form" : "Show New Board Form"}
        </button>
      </section>
      <section>
        {selectedBoard.id && (
          <div>
            <h1 className="card"> Cards for {selectedBoard.title} </h1>
            {displayCards}
          
            <CardList cards={cardData}> onDeleteCard={deleteCard}</CardList>
            <h1 className="card"> Create a New Card</h1>
            <NewCardForm onUpdateCardData={updateCardData} />
          </div>
        )}
      </section>
      <footer>
        <p> Click here to delete all boards and cards</p>
      </footer>
    </div>
  );
}
export default App;
