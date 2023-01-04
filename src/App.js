import React from "react";
import { useState } from "react";
import BoardList from "./components/BoardList"
import CardList from "./components/CardList";
import "./App.css";
import axios from "axios";

const boardData= [
  {
    id: 1,
    title: "Title",
    owner: "Erika"
  }, 
  {
    id: 2,
    title: "Title2",
    owner: "erika"
  },
  {
    id: 3,
    title: "title3",
    owner: "hakai"
  }
]

const selectBoard = id => {
  console.log("pass") 
};

function App() {
  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <BoardList> 
        boardData={boardData}
        onSelectBoard={selectBoard}
      </BoardList>
    </div>
  );
}

export default App;
