import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList";
import Header from "./components/Header";
import NewBoardForm from "./components/NewBoardForm";
import Title from "./components/Title";
import VieworAddButtons from "./components/ViewOrAddButtons";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);

  const loadBoardList = () => {
    axios
      .get("https://inspiration-board-db.herokuapp.com/boards")
      .then((response) => {
        const updatedBoardList = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
            chosen_board_cards: ["chosen board cards"],
          };
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCards = (boardId) => {
    axios
      .get(`https://inspiration-board-db.herokuapp.com/boards/${boardId}/cards`)
      .then((response) => {
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
        console.log(`🤡${JSON.stringify(response.data)}`);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (cardId) => {
    console.log("delete card called");
    console.log(`🦷${JSON.stringify(selectedBoard)}`);
    axios
      .delete(
        `https://inspiration-board-db.herokuapp.com/boards/cards/${cardId}`
      )
      // .delete(
      //   `http://127.0.0.1:5000/boards/${selectedBoard.id}/cards/${cardId}`
      // )
      .then(() => {
        const newCardData = [];
        for (const card of cards) {
          if (card.id !== cardId) {
            newCardData.push(card);
          }
        }
        setCards(newCardData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header></Header>
      <Title></Title>
      <VieworAddButtons></VieworAddButtons>
      <NewBoardForm addBoardCallbackFunc={addBoard} />
      <BoardList boardList={boardList} loadBoard={loadBoard} />
      <Board
        cards={cards}
        selectedBoard={selectedBoard}
        addCard={addCard}
        deleteCard={deleteCard}
      />
    </div>
  );
}

export default App;
