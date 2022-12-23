import React from "react";
import "./App.css";
import Board from "./components/Board.js";
import NewCardForm from "./components/NewCardForm";

const TEMP_DATA = [
  {
    id: 1,
    message: "Stay cool.",
  },
  {
    id: 2,
    message: "You are always good enough.",
  },
  {
    id: 3,
    message: "Everyone loves you.",
  },
];

//left off here
// const addCard

function App() {
  return (
    <div>
      <Board cards={TEMP_DATA} />
      <NewCardForm addCardCallbackFunc={addCard} />
    </div>
  );
}

export default App;
