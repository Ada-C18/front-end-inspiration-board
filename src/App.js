import React, { useState } from "react";
import "./App.css";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CardForm from "./components/CardForm";
import testData from "./data/test.json";

const App = function () {
  const handleNewBoard = function (newBoardData) {
    console.log(JSON.stringify(newBoardData));
  };

  const handleBoardSelect = function (boardID) {
    console.log(boardID);
  };

  const testBoardListData = testData[0];
  const [boardListState, setBoardListState] = useState(testBoardListData);

  const handleNewCard = (newcard) => {
    console.log("new card" + newcard);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <section id="board-section">
        <div id="board-container">
          <div id="board-list">
            <BoardList
              boardListData={boardListState}
              handleBoardSelect={handleBoardSelect}
            />
          </div>
          <div id="current-board">Put CurrentBoard component here.</div>
        </div>
        <div id="board-form-container">
          <BoardForm handleNewBoard={handleNewBoard} />
        </div>
      </section>
      <section id="card-section">
        <div id="card-list">Put CardList and Card components here.</div>
        <div id="card-form-container">
          {" "}
          <CardForm handleNewCard={handleNewCard}></CardForm>
        </div>
      </section>
    </div>
  );
};

export default App;
