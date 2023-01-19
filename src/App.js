import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";
import BoardList from "./components/BoardList";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardList, setCardList] = useState([]);
  const URL = "https://vtv-inspo.herokuapp.com/boards";
  // function loadBoardOnClick(board) {

  //   setSelectedBoard(board);
  // }

  const fetchAllBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        const boardsAPIResCopy = res.data.map((board) => {
          return {
            boardId: board.board_id,
            title: board.title,
            owner: board.owner,
            // cards: board.cards,
          };
        });
        setBoardList(boardsAPIResCopy);
        console.log(boardsAPIResCopy);
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
        console.log(response);
        const newBoards = [...boardList];
        const newBoardJSON = {
          ...newBoardInfo,
          boardId: response.data.board_id,
          cards: response.data.cards,
        };
        console.log(newBoardJSON);
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
            cardId: card.card_id,
            message: card.message,
            likesCount: card.likes_count,
          };
        });
        setCardList(cardsAPIResCopy);
        console.log(cardsAPIResCopy);
        setSelectedBoard(board);
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
            {/* <div> */}
            <BoardList
              boards={boardList}
              loadBoardOnClick={loadBoardOnClick}
            ></BoardList>
            {/* </div> */}
          </section>
          <section className="selected-board">
            <h2>Selected Board</h2>
            {/* <div> */}
            {selectedBoard
              ? `${selectedBoard.title} - ${selectedBoard.owner}`
              : "Select a Board from the Board List!"}
            {/* </div> */}
          </section>
          <section className="add-new-board">
            <h2>Create a New Board</h2>
            {/* <div> */}
            <NewBoardForm addBoardCallbackFunc={addBoard}></NewBoardForm>
            {/* </div> */}
          </section>
        </div>
        <div className="cards">
          <section className="cards-for-board">
            <h2>Cards for Pick-me-up Quotes</h2>
            <div>CardList component (Work in Progres)</div>
          </section>
          <section className="add-new-card">
            <h2>Create a New Card</h2>
            <div>NewCardForm component (Work in Progress)</div>
          </section>
        </div>
      </main>
      <footer>
        <p> © Build by Vivian, Tatiana & Viktoriia 2023</p>
      </footer>
    </div>
  );
}

export default App;
