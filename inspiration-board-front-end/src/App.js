import "./App.css";
import BoardList from "./components/BoardList";
// import { useState } from "react";

const testBoards = [
  { title: "Test Board One ", id: 1, owner: "test owner one" },
  { title: "Test Board Two", id: 2, owner: "test owner two" },
  { title: "Test Board Three", id: 3, owner: "test owner three" },
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
