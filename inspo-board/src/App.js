import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import boardData from "..boardData.json";
import BoardList from "./components/boardList";

function App() {
  const [boards, setBoards] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <h2>Boards</h2>
        <BoardList boards={boards} />
      </main>
    </div>
  );
}

export default App;
