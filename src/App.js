import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CurrentBoard from "./components/CurrentBoard";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import testData from "./data/test.json";
import {
  getAllBoards,
  addNewBoard,
  addNewCard,
  getAllCards,
} from "./API/InspirationAPI";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

const App = function () {
  /* Refresh boardListState and currentBoardState if 
  we add or edit a board. 
  */
  const changeStateOnBoardEdit = function (response) {
    setCurrentBoardState(response.board_id);
    getAllBoards(setBoardListState);
  };

  // #TODO; setCurrentBoardState(parseInt(response.board_id))
  // It is directly passing the response.board_id to
  // the setCurrentBoardState function instead of parsing it as an integer? 

  /* Handle submit from BoardForm. */
  const handleNewBoard = function (newBoardData) {
    addNewBoard(newBoardData, changeStateOnBoardEdit);
    // console.log(JSON.stringify(newBoardData));
  };
  // #TODO Const handleNewBoard = (newBoardData) => 
  // { setBoardListState([...boardListState, newBoardData]); }
  //><BoardForm handleNewBoard={handleNewBoard}/></code>
  // should we write useEffect for form validation instead of doing
  // it manually in the onChange event handlers? 

  const testBoardListData = testData[0];
  const testcardListData = testData[1];
  const kDefaultBoardList = [{ board_id: 0, name: "", owner: "" }];
  const [boardListState, setBoardListState] = useState(kDefaultBoardList);
  const [currentBoardState, setCurrentBoardState] = useState(0);
  const [cardListState, setCardListState] = useState([]);

  const handleBoardSelect = function (boardID) {
    setCurrentBoardState(parseInt(boardID));
    console.log(boardID);
    console.log(currentBoardState);
    getAllCards(currentBoardState, setCardListState);

    }
    
    // const handleBoardSelect = function (boardID) {
    //   setCurrentBoardState(parseInt(boardID));
    //   console.log(boardID);
    //   console.log(currentBoardState);
    //   getAllCards(boardID, setCardListState);
    // TODO; using the currentBoardState variable in the getAllCards function.
    // Instead, it should be passing the boardID variable directly to the getAllCards function
  };

  useEffect(() => {
    getAllBoards(setBoardListState);
  }, []);

  useEffect(() => {
    if (currentBoardState === 0) {
      setCurrentBoardState(boardListState[0].board_id);
    }
  }, [boardListState, currentBoardState]);

  /* handle submit from cardForm */
  const handleNewCard = (newcard) => {
    console.log("new card" + JSON.stringify(newcard));
    addNewCard(newcard, currentBoardState, (res) => console.log(res));
    getAllCards(currentBoardState, setCardListState);
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
          <CardList cardListData={cardListState}></CardList>
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
