import "./App.css";
import BoardList from "./components/BoardList";
// import { useState } from "react";

const testBoards = [
  { title: "Test Board One ", id: 1, owner: "Pavi" },
  { title: "Test Board Two", id: 2, owner: "Soliel" },
  { title: "Test Board Three", id: 3, owner: "Misha" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList boards={testBoards} />
      </main>
    </div>
  );
}

export default App;
