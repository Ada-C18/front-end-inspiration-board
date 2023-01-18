import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import BoardList from "./components/BoardList";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import card from "./components/Card";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([]);

  const BOARD_URL = "http://127.0.0.1:5000/boards";
  const CARD_URL = "http://127.0.0.1:5000/cards";

  const getAllBoards = () => {
    axios
      .get(BOARD_URL)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const selectBoard = (board_id, title, owner, cards) => {
    const board = { board_id, title, owner, cards };
    setSelectedBoard(board);
    axios
      .get(`${BOARD_URL}/${board_id}`)
      .then((result) => {
        console.log(result.data.board.cards);
        setCards(result.data.board.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewBoard = (newBoard) => {
    axios
      .post(BOARD_URL, newBoard)
      .then((result) => {
        console.log(result.data);
        const newBoardData = {
          board_id: result.data.board.board_id,
          title: result.data.board.title,
          owner: result.data.board.owner,
        };
        setBoards([...boards, newBoardData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewCard = (newCard) => {
    console.log(newCard);
    console.log(cards);
    axios
      .post(CARD_URL, newCard)
      .then((result) => {
        console.log(result.data);
        setCards([...cards, result.data.card]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${CARD_URL}/${cardId}`)
      .then(() => {
        const newCards = cards.filter((card) => card.card_id !== cardId);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addLike = (cardId) => {
    axios.patch(`${CARD_URL}/${cardId}`).then((result) => {
      const cardsCopy = [...cards];
      for (const card of cardsCopy) {
        if (card.card_id === cardId) {
          card.likes_count += 1;
        }
      }
      setCards(cardsCopy);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main className="main-container">
        <section className="board-section">
          <div>
            <h2>Boards</h2>
            <BoardList boards={boards} onSelectBoard={selectBoard} />
          </div>
          <div>
            <h2>Selected Board</h2>
            <h4>
              {selectedBoard
                ? `${selectedBoard.title} - ${selectedBoard.owner}`
                : "Select a board from the list"}
            </h4>
          </div>
          <div>
            <h2>Create a new board</h2>
            {showForm ? <NewBoardForm addNewBoardCallback={addNewBoard} /> : ""}
            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? "Hide new board form" : "Show new board form"}
            </button>
          </div>
        </section>
        <section>
          <div>
            {selectedBoard ? (
              <div>
                <h2>Cards</h2>
                <CardList
                  cards={cards}
                  deleteCard={deleteCard}
                  addLike={addLike}
                />
                {showCard ? (
                  <NewCardForm
                    addNewCardCallback={addNewCard}
                    boardId={selectedBoard.board_id}
                  />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
