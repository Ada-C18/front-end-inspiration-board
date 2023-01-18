import "./App.css";
import background from "./cork-board.jpg";
import { useState } from "react";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CardList from "./components/CardList";

// run in command line:  npm install @material-ui/core/Dialog --force

const INITIAL_BOARDS = [
  {
    id: 1,
    title: "Shower Thoughts",
    owner: "Suzanne",
    cards: [],
    selected: false,
  },
  {
    id: 2,
    title: "Inspirational Quotations",
    owner: "Jessica",
    cards: [],
    selected: false,
  },
];

function App() {
  const [boardsList, setBoardsList] = useState(INITIAL_BOARDS);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [open, setOpen] = useState(false);
  const [cardsList, setCardsList] = useState([]);

  const addBoard = (newBoardInfo) => {
    // Add axios post request};
    const newBoard = [...boardsList];
    newBoard.push(newBoardInfo);
    setBoardsList(newBoard);
  };

  const boardSelector = (selectedBoard) => {
    const boards = boardsList.map((board) => {
      if (board.id === selectedBoard.id) {
        setSelectedBoard(selectedBoard);
        return selectedBoard;
      } else {
        board = { ...board, selected: false };
        return board;
      }
    });
    setBoardsList(boards);
    setCardsList(selectedBoard.cards);
  };

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const addCard = (cardData) => {
    const newCard = [...cardsList];
    newCard.push(cardData);
    setCardsList(newCard);
    selectedBoard.cards = newCard;
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
      </header>
      <body>
        <section className="container">
          <h3 className="boardSelector">Select an Existing Board </h3>
          <BoardList boardsList={boardsList} boardSelector={boardSelector} />
          <h3 className="HeaderOfNewBoard">Create a New Board</h3>
          <NewBoardForm addBoardCallBackFunc={addBoard} />
          {selectedBoard && (
            <>
              <h3 className="CardsForSectedBoard">
                Cards for {selectedBoard.title}
              </h3>
              <button id="createNewCard" onClick={handleClickToOpen}>
                Create New Card
              </button>
              <Dialog open={open} onClose={handleToClose}>
                <NewCardForm
                  closeDialogCallBackFunc={handleToClose}
                  addCardCallBackFunc={addCard}
                />
              </Dialog>
              <CardList cardsList={cardsList} />
            </>
          )}
        </section>
      </body>
    </div>
  );
}

export default App;
