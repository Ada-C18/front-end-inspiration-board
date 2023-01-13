import React, { useEffect, useState } from 'react';
import './App.css';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CurrentBoard from './components/CurrentBoard';
import testData from './data/test.json';
import { getAllBoards } from './API/InspirationAPI';

const App = function () {
  // load data from API after component load
  useEffect(() => {
    getAllBoards(setBoardListState);
  }, []);

  const handleNewBoard = function (newBoardData) {
    console.log(JSON.stringify(newBoardData));
  };

  const testBoardListData = testData[0];
  const kDefaultBoardList = [{ board_id: 0, name: '', owner: '' }];
  const [boardListState, setBoardListState] = useState(kDefaultBoardList);
  const [currentBoardState, setCurrentBoardState] = useState(
    boardListState[0].board_id
  );

  const handleBoardSelect = function (boardID) {
    setCurrentBoardState(parseInt(boardID));
    console.log(boardID);
    console.log(currentBoardState);
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
        <div id="card-list">Put CardList and Card components here.</div>
        <div id="card-form-container">Put CardForm here.</div>
      </section>
    </div>
  );
};

export default App;
