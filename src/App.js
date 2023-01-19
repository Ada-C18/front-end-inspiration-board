import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList";
/* import NewCardForm from "./components/NewCardForm"; */
import Header from "./components/Header";
import NewBoardForm from "./components/NewBoardForm";
import Title from "./components/Title";
import VieworAddButtons from "./components/ViewOrAddButtons";

const REACT_APP_BACKEND_URL =
  "https://inspiration-board-db.herokuapp.com/boards";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);

  const loadBoardList = () => {
    axios
      .get("https://inspiration-board-db.herokuapp.com/boards")
      .then((response) => {
        const updatedBoardList = response.data.map((board) => {
          return { id: board.id, title: board.title, owner: board.owner };
        });
        setBoardList(updatedBoardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(loadBoardList, []);

  const addBoard = (newBoardInfo) => {
    console.log("addBoard called");
    const newBoardList = [...boardList];
    axios
      .post("https://inspiration-board-db.herokuapp.com/boards", newBoardInfo)
      .then((response) => {
        const newBoard = {
          ...newBoardInfo,
          id: response.data.id,
        };
        newBoardList.push(newBoard);
        setBoardList(newBoardList);
        loadBoardList();
      });
  };

  const loadCards = (boardId) => {
    axios
      .get(`https://inspiration-board-db.herokuapp.com/boards/${boardId}/cards`)
      .then((response) => {
        console.log(`${JSON.stringify(response)}`);
        const cards = response.data["chosen board cards"];
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadBoard = (boardId) => {
    console.log("handle board click called");
    axios
      .get(`https://inspiration-board-db.herokuapp.com/boards/${boardId}`)
      .then((response) => {
        setSelectedBoard(response.data);
        loadCards(boardId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (newCardInfo, boardId) => {
    console.log("addCard called");
    axios
      .post(
        `https://inspiration-board-db.herokuapp.com/boards/${boardId}/cards`,
        newCardInfo
      )
      .then((response) => {
        const newCards = [...cards];
        const newCardJSON = {
          ...newCardInfo,
          id: response.data.id,
          message: response.data.message,
        };
        newCards.push(newCardJSON);
        setCards(newCards);
        loadCards(boardId);
      });
  };

  return (
    <div>
      <Header></Header>
      <Title></Title>
      <VieworAddButtons></VieworAddButtons>
      <NewBoardForm addBoardCallbackFunc={addBoard} />
      <BoardList boardList={boardList} loadBoard={loadBoard} />
      <Board cards={cards} selectedBoard={selectedBoard} addCard={addCard} />
    </div>
  );
}

export default App;
