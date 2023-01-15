import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CurrentBoard from "./components/CurrentBoard";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import testData from "./data/test.json";
import { getAllBoards, addNewBoard } from "./API/InspirationAPI";

const App = function () {
  /* Refresh boardListState and currentBoardState if 
  we add or edit a board. 
  */
  const changeStateOnBoardEdit = function (response) {
    setCurrentBoardState(response.board_id);
    getAllBoards(setBoardListState);
  };

  /* Handle submit from BoardForm. */
  const handleNewBoard = function (newBoardData) {
    addNewBoard(newBoardData, changeStateOnBoardEdit);
    // console.log(JSON.stringify(newBoardData));
  };

  const testBoardListData = testData[0];
  const testcardListData = testData[1];
  const kDefaultBoardList = [{ board_id: 0, name: "", owner: "" }];
  const [boardListState, setBoardListState] = useState(kDefaultBoardList);
  const [currentBoardState, setCurrentBoardState] = useState(0);

  const handleBoardSelect = function (boardID) {
    setCurrentBoardState(parseInt(boardID));
    console.log(boardID);
    console.log(currentBoardState);
  };

  useEffect(() => {
    getAllBoards(setBoardListState);
    //console.log(boardListState);
  }, []);

  const [cardListState, setcardListState] = useState(testcardListData);

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
          <div id="current-board">
            <CurrentBoard
              boardListData={boardListState}
              currentBoardState={currentBoardState}
            />
          </div>
        </div>
        <div id="board-form-container">
          <BoardForm handleNewBoard={handleNewBoard} />
        </div>
      </section>
      <section id="card-section">
        <div id="card-list">
          {" "}
          <CardList cardListData={testcardListData}></CardList>
        </div>
        <div id="card-form-container">
          {" "}
          <CardForm handleNewCard={handleNewCard}></CardForm>
        </div>
      </section>
    </div>
  );
};

export default App;
