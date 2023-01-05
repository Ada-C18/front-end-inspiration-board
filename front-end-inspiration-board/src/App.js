import "./App.css";
import background from "./cork-board.jpg";
import { useState } from "react";
import BoardList from "./components/BoardList";
import NewBoardForm from "./components/NewBoardForm";

const INITIAL_BOARDS = [
  { id: 1, title: "Shower Thoughts", owner: "Suzanne", cards: [] },
  { id: 2, title: "Inspirational Quotations", owner: "Jessica", cards: [] },
];

function App() {
  const [boardsList, setBoardsList] = useState(INITIAL_BOARDS);

  const addBoard = (newBoardInfo) => {
    // Add axios post request};
    const newBoard = [...boardsList];
    newBoard.push(newBoardInfo);
    setBoardsList(newBoard);
  };
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
      </header>
      <body>
        <section className="container">
          <h2 className="boardSelector">Select an Existing Board </h2>
          <BoardList boardsList={boardsList} />
          <h2 className="HeaderOfNewBoard">Create a New Board</h2>
          <NewBoardForm addBoardCallBackFunc={addBoard} />
          <h2 className="CardsForSectedBoard">Cards for Selected Board</h2>
          <button className="CreateNewCard">Create a New Card</button>
        </section>
      </body>
    </div>
  );
}

export default App;
