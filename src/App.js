import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";
import BoardList from "./components/BoardList";

function App() {
  const [boardList, setBoardList] = useState([]);
  const URL = "https://vtv-inspo.herokuapp.com/boards";

  const fetchAllBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        const boardsAPIResCopy = res.data.map((board) => {
          return {
            boardId: board.board_id,
            title: board.title,
            owner: board.owner,
            cards: board.cards,
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

  return (
    <div>
      <header className="project-title">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section className="board-list">
          <h2>Boards</h2>
          <div>
            <BoardList boards={boardList}></BoardList>
          </div>
        </section>
        <section className="selected-board">
          <h2>Selected Board</h2>
          <p>Select a Board from the Board List!</p>
          
          <div>Need to insert selected Board</div>
        </section>
        <section className="add-new-board">
          <h2>Create a New Board</h2>
          <div>
            <NewBoardForm addBoardCallbackFunc={addBoard}></NewBoardForm>
          </div>
        </section>
        <section className="cards">
          <h2>Cards for Pick-me-up Quotes</h2>
          <div>Need to insert CardList component</div>
        </section>
        <section className="add-new-card">
          <h2>Create a New Card</h2>
          <div>Need to insert NewCardForm component</div>
        </section>
      </main>
      <footer>
        <p>Copyright Build by Vivian, Tatiana, Viktoriia 2023</p>
      </footer>
    </div>
  );
}

export default App;
