import React, { useState, useEffect } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";
import CardList from "./components/CardList";
import NewCardForm from "./components/CreateNewCard.js";
import BoardList from "./components/BoardList.js";

import "./App.css";

function App() {
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });
  const [selectedBoardId, setSelectedBoardId] = useState(0);
  const [isBoardSelected, setIsBoardSelected] = useState(false);
  const [isBoardFormDisplayed, setIsBoardFormDisplayed] = useState(true);
  const [boardsData, setBoardsData] = useState([]);
  const [cardsData, setCardsData] = useState([]);

  // GET ALL BOARDS
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        const boardsList = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardsData(boardsList);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // CREATE NEW BOARD
  const createBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const newlyCreatedBoard = {
      title: newBoard.title,
      owner: newBoard.owner,
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newlyCreatedBoard)
      .then((response) => {
        newBoardList.push(response.data);
        setBoardsData(newBoardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // CREATE NEW CARD
  const createCard = (newCard) => {
    const newCardList = [...cardsData];
    const newlyCreatedCard = {
      message: newCard.message,
      likes_count: 0,
    };

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoardId}/cards`,
        newlyCreatedCard
      )
      .then((response) => {
        newCardList.push(response.data);
        setCardsData(newCardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // SELECT BOARD CALLBACK FUNCTION
  const toggleSelectBoard = (clickedId) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${clickedId}`)
      .then((response) => {
        if (response.data.id === selectedBoardId) {
          setIsBoardSelected(false);
          setSelectedBoardId(0);
        } else {
          setSelectedBoardId(response.data.id);
          setIsBoardSelected(true);
          setCardsData(response.data.cards);
          setSelectedBoard(response.data);
        }
      })
      .catch((error) => {
        console.log("Error! Board not found");
      });
  };

  // HIDE OR SHOW NEW BOARD FORM BUTTON
  const boardFormButtonHandler = (event) => {
    event.preventDefault();
    setIsBoardFormDisplayed(!isBoardFormDisplayed);
  };

  // INCREASE LIKES
  const increaseLikesCount = (card) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.id}/like`, card)
      .then((response) => {
        const newCardsData = cardsData.map((existingCard) => {
          return existingCard.id !== card.id
            ? existingCard
            : { ...card, likes_count: response.data.likes_count };
        });
        setCardsData(newCardsData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // DELETE CARD
  const deleteCard = (card) => {
    const newCardsData = cardsData.map((existingCard) => {
      return existingCard.id !== card.id && existingCard;
    });
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.id}`)
      .then(() => setCardsData(newCardsData))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <header>
        <h1 id="header-text">Inspiration Board</h1>
      </header>
      <main className="main_container">
        <section className="board_container">
          <div>
            <BoardList
              selectedBoard={selectedBoard}
              selectedBoardId={selectedBoardId}
              boardData={boardsData}
              selectedBoardCallback={toggleSelectBoard}
              isBoardSelected={isBoardSelected}
              isBoardFormDisplayed={isBoardFormDisplayed}
              boardFormButtonHandler={boardFormButtonHandler}
            />
          </div>
          <div class="new-board-form-display">
            {isBoardFormDisplayed && (
              <NewBoardForm createBoardCallback={createBoard} />
            )}
          </div>
        </section>
        <section className="card_container">
          <div>
            <h2>Cards</h2>
            {isBoardSelected && (
              <CardList
                boardId={selectedBoardId}
                cardListData={cardsData}
                increaseLikesCount={increaseLikesCount}
                deleteCard={deleteCard}
              />
            )}
          </div>
          <div>
            {isBoardSelected && <NewCardForm createCardCallback={createCard} />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
