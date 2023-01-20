import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardList, setCardList] = useState([]);
  const URL = "https://vtv-inspo.herokuapp.com/boards";
  const URL2 = "https://vtv-inspo.herokuapp.com/cards";

  const fetchAllBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        const boardsAPIResCopy = res.data.map((board) => {
          return {
            boardId: board.board_id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardList(boardsAPIResCopy);
        // console.log(boardsAPIResCopy);
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
        // console.log(response);
        const newBoards = [...boardList];
        const newBoardJSON = {
          ...newBoardInfo,
          boardId: response.data.board_id,
          cards: response.data.cards,
        };
        // console.log(newBoardJSON);
        newBoards.push(newBoardJSON);
        setBoardList(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const loadBoardOnClick = (board) => {
    axios
      .get(`${URL}/${board.boardId}/cards`)
      .then((res) => {
        const cardsAPIResCopy = res.data.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            likesCount: card.likes_count,
          };
        });
        setCardList(cardsAPIResCopy);
        // console.log(cardsAPIResCopy);
        setSelectedBoard(board);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`${URL2}/${id}`)
      .then(() => {
        const newCardList = [];
        for (const card of cardList) {
          if (card.card_id !== id) {
            newCardList.push(card);
          }
        }
        // console.log("delete func called");
        setCardList(newCardList);
        loadBoardOnClick(selectedBoard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main-page">
      <header className="project-title">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div className="boards">
          <section className="board-list">
            <h2>Boards</h2>
            <BoardList
              boards={boardList}
              loadBoardOnClick={loadBoardOnClick}
            ></BoardList>
          </section>
          <section className="selected-board">
            <h2>Selected Board</h2>
            {selectedBoard
              ? `${selectedBoard.title} - ${selectedBoard.owner}`
              : "Select a Board from the Board List!"}
          </section>
          <section className="add-new-board">
            <h2>Create a New Board</h2>
            <NewBoardForm addBoardCallbackFunc={addBoard}></NewBoardForm>
          </section>
        </div>
        <div className="cards">
          <section className="cards-for-board">
            <h2>Cards for Selected Board 🗒 </h2>
            <CardList cards={cardList} deleteCard={deleteCard} />
          </section>
          <section className="add-new-card">
            <h2>Create a New Card</h2>
            <div>NewCardForm component (Work in Progress)</div>
          </section>
        </div>
      </main>
      <footer>
        <p> © Built by Vivian, Tatiana & Viktoriia 2023</p>
      </footer>
    </div>
  );
}

export default App;
