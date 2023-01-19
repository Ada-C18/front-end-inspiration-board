import "./App.css";
import background from "./cork-board.jpg";
import { useEffect, useState } from "react";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CardList from "./components/CardList";
import axios from "axios";

// run in command line:  npm install @material-ui/core/Dialog --force

// const INITIAL_BOARDS = [
//   {
//     id: 1,
//     title: "Shower Thoughts",
//     owner: "Suzanne",
//     cards: [
//       { id: 1, message: "testing 1", likes_count: 1 },
//       { id: 2, message: "testing 2", likes_count: 0 },
//       { id: 3, message: "testing 3", likes_count: 0 },
//       { id: 4, message: "testing 4", likes_count: 5 },
//       { id: 5, message: "testing 5", likes_count: 2 },
//     ],
//     selected: false,
//   },
//   {
//     id: 2,
//     title: "Inspirational Quotations",
//     owner: "Jessica",
//     cards: [],
//     selected: false,
//   },
// ];

function App() {
  const URL = "https://inspirationboard-lavender.herokuapp.com/boards";
  const [boardsList, setBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [open, setOpen] = useState(false);
  const [cardsList, setCardsList] = useState([]);

  const fetchAllBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        // console.log(res);
        const BoardsAPIResCopy = res.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
            cards: board.cards,
          };
        });
        setBoardsList(BoardsAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchAllBoards, []);

  const addBoard = (newBoardInfo) => {
    axios
      .post(URL, newBoardInfo)
      .then((response) => {
        const newBoards = [...boardsList];
        const newBoardJSON = {
          ...newBoardInfo,
          id: response.data.id,
        };
        newBoards.push(newBoardJSON);
        setBoardsList(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
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
    axios
      .post(URL + "/" + selectedBoard.id + "/cards", cardData)
      .then((response) => {
        const newCards = [...cardsList];
        const newCardJSON = {
          ...cardData,
          id: response.data.id,
        };
        newCards.push(newCardJSON);
        setCardsList(newCards);
        console.log(newCards);
        selectedBoard.cards = newCards;
      });
  };

  const increaseLikes = (cardId, NewLikesCount) => {
    const newCardList = [];
    for (const card of cardsList) {
      if (card.id !== cardId) {
        newCardList.push(card);
      } else {
        const updatedCard = {
          ...card,
          likes_count: NewLikesCount,
        };
        newCardList.push(updatedCard);
      }
    }
    setCardsList(newCardList);
  };

  const deleteCard = (cardId) => {
    const newCardList = [];
    for (const card of cardsList) {
      if (card.id !== cardId) {
        newCardList.push(card);
      }
      setCardsList(newCardList);
    }
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
              <div id="cardListContainer">
                <CardList
                  deleteCard={deleteCard}
                  increaseLikes={increaseLikes}
                  cardsList={cardsList}
                />
              </div>
              <Dialog open={open} onClose={handleToClose}>
                <NewCardForm
                  closeDialogCallBackFunc={handleToClose}
                  addCardCallBackFunc={addCard}
                />
              </Dialog>
            </>
          )}
        </section>
      </body>
    </div>
  );
}

export default App;
