import "./App.css";
import BoardList from "./components/BoardList";
import { useState } from "react";

const emptyBoard = [{ id: 0, title: " ", owner: " " }];

function App() {
  const [selectedBoard, setSelectedBoard] = useState(emptyBoard);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList />
      </main>
    </div>
  );
}

export default App;
