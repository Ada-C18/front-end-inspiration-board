import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm.js";

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

  const URL = "https://inspirationboard.herokuapp.com/boards";
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

  const cardsURL = "https://inspirationboard.herokuapp.com/cards";
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

  const addBoard = (newBoardInfo) => {
    //use axios.post request here
    //handling .then to update frontend, update state variable with setBikesList()
    axios
      .post(URL, newBoardInfo)
      .then((response) => {
        // console.log(response);
        fetchAllBoards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBoard = (boardId) => {
    console.log("delete board called!!!");
    axios
      .delete(`${URL}/${boardId}`)
      .then(() => {
        const newBoardList = [];
        for (const board of boardsList) {
          if (board.id !== boardId) {
            newBoardList.push(board);
          }
        }
        setBoardsList(newBoardList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <BoardList boardEntries={boardsList} deleteBoard={deleteBoard} />
      <CardList cardEntries={cardsList} />
      <NewBoardForm addBoardCallbackFunc={addBoard} />
    </div>
  );
}

export default App;
