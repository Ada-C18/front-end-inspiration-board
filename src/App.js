import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";

// const TEMP_DATA = [
//   {
//     id: 1,
//     message: "Stay cool.",
//   },
//   {
//     id: 2,
//     message: "You are always good enough.",
//   },
//   {
//     id: 3,
//     message: "Everyone loves you.",
//   },
// ];

const boards = [
  { title: "Nina's Board", owner: "Nina" },
  { title: "Lynn's Board", owner: "Lynn" },
];

const REACT_APP_BACKEND_URL = "http://localhost:5000/cards";

function App() {
  const [board, setBoard] = useState([]);
  const fetchAllCards = () => {
    axios
      .get(REACT_APP_BACKEND_URL)
      .then((response) => {
        const cardsAPIResponseCopy = response.data.map((card) => {
          return { id: card.id, message: card.message };
        });
        setBoard(cardsAPIResponseCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchAllCards, []);

  const addCard = (newCardInfo) => {
    console.log("addCard called");
    axios.post(REACT_APP_BACKEND_URL, newCardInfo).then((response) => {
      const newCards = [...board];
      const newCardJSON = {
        ...newCardInfo,
        message: response.data.message,
      };
      newCards.push(newCardJSON);
      setBoard(newCards);
    });
  };
  return (
    <div>
      <h1>Hello Peeps!</h1>
      <BoardList boards={boards} />
      <Board cards={board} />
      <NewCardForm addCardCallbackFunc={addCard} />
      <NewBoardForm />
    </div>
  );
}

export default App;
