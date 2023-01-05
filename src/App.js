import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";

// const INITIAL_CARDS = [
//   {
//     id: 1,
//     message: "Test",
//     like_count: 1,
//   },
//   {
//     id: 2,
//     message: "Good morning",
//     like_count: 2,
//   },
//   {
//     id: 3,
//     message: "Drink coffee",
//     like_count: 9,
//   },
// ];

function App() {
  // boardsList axios call 
  const [boardsList, setBoardsList] = useState([]);

  const URL = "http://localhost:5000/boards";
  const fetchAllBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        //making a copy of the data to display to DOM
        const boardsAPIResCopy = res.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardsList(boardsAPIResCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchAllBoards, []);

  // cardsList axios call 
  const [cardsList, setCardsList] = useState([]);

  const cardsURL = "http://localhost:5000/cards";
  const fetchAllCards = () => {
    axios
      .get(cardsURL)
      .then((res) => {
        //making a copy of the data to display to DOM
        const cardsAPIResCopy = res.data.map((card) => {
          return {
            id: card.id,
            message: card.message,
            like_count: card.like_count,
          };
        });
        setCardsList(cardsAPIResCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchAllCards, []);

  return (
    <div>
      <BoardList boardEntries={boardsList}></BoardList>
      <CardList cardEntries={cardsList}></CardList>
    </div>
  );
}

export default App;
