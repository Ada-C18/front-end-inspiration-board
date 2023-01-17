import "./App.css";
import Board from "./components/Board";
import CardsList from "./components/CardsList";
import NewBoardForm from "./components/NewBoardForm";
// import axios from "axios";
// import { useState } from "react";
import cardData from "./mockdata/card.json";
import mockBoardData from "./mockdata/board.json";

function App() {
  // console.log("cardData1", cardData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
      </header>
      <main>
        <div>
          <Board boardData={mockBoardData} />
        </div>
        <div>
          <CardsList cardData={cardData} />
          {/* <img className="likeButton" src="./assets/heart.png" alt="Like Button"></img> */}
        </div>

        <section className="createNew">
          <div className="boardContainer">
            <h2 className="createBoard">
              Create New Board
              <NewBoardForm/>
            </h2>
          </div>
          <div className="newCardContainer">
            <h2 className="newCardBoard">Create New Card</h2>
            {/* <NewCardForm /> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
