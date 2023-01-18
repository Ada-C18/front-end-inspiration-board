import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CurrentBoard from './components/CurrentBoard';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import testData from './data/test.json';
import {
  getAllBoards,
  addNewBoard,
  addNewCard,
  getAllCards,
} from './API/InspirationAPI';

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
  const kDefaultBoardList = [{ board_id: 0, name: '', owner: '' }];
  const [boardListState, setBoardListState] = useState(kDefaultBoardList);
  const [currentBoardState, setCurrentBoardState] = useState(0);

  const handleBoardSelect = function (boardID) {
    setCurrentBoardState(parseInt(boardID));
    console.log(boardID);
    console.log(currentBoardState);
    getAllCards(currentBoardState, setCardListState);
  };

  useEffect(() => {
    getAllBoards(setBoardListState);
  }, []);

  useEffect(() => {
    if (currentBoardState === 0) {
      setCurrentBoardState(boardListState[0].board_id);
    }
  }, [boardListState, currentBoardState]);

  const [cardListState, setCardListState] = useState([]);

  /* handle submit from cardForm */
  const handleNewCard = (newcard) => {
    console.log('new card' + JSON.stringify(newcard));
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
          {' '}
          <CardList cardListData={cardListState}></CardList>
        </div>
        <div id="card-form-container">
          {' '}
          <CardForm handleNewCard={handleNewCard}></CardForm>
        </div>
      </section>
    </div>
  );
};

export default App;
