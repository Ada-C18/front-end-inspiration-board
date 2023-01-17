import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import BoardList from "./components/BoardList";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([]);

  const URL = "http://127.0.0.1:5000/boards";

  const getAllBoards = () => {
    axios
      .get(URL)
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
      .get(`${URL}/${board_id}`)
      .then((result) => {
        console.log(result.data);
        setCards(result.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewBoard = (newBoard) => {
    axios
      .post(URL, newBoard)
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <h2>Boards</h2>
        <BoardList boards={boards} onSelectBoard={selectBoard} />
        <div>
          <h2>Selected Board</h2>
          <h4>
            {selectedBoard
              ? `${selectedBoard.title} - ${selectedBoard.owner}`
              : "Select a board from the list"}
          </h4>
        </div>
        <h2>Create a new board</h2>
        {showForm ? <NewBoardForm addNewBoardCallback={addNewBoard} /> : ""}
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide new board form" : "Show new board form"}
        </button>
        <div>
          <h2>Cards</h2>
          {selectedBoard ? <CardList cards={selectedBoard.cards} /> : ""}
        </div>
      </main>
    </div>
  );
}

export default App;
