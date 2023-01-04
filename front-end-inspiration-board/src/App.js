import "./App.css";
import background from "./cork-board.jpg";
import { useState } from "react";
import BoardList from "./components/BoardList";

const INITIAL_BOARDS = [
  { id: 1, title: "Shower Thoughts", owner: "Suzanne", cards: [] },
  { id: 2, title: "Inspirational Quotations", owner: "Jessica", cards: [] },
];

function App() {
  // const [boardsList, setBoardsList] = useState(INITIAL_BOARDS);
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
      </header>
      <body>
        <section className="container">
          <h2 className="boardSelector">Select an Existing Board </h2>
          <BoardList boardsList={INITIAL_BOARDS} />
          <h2 className="HeaderOfNewBoard">Create a New Board</h2>
          <h2 className="CreateNewBoard">Form</h2>
          <h2 className="CardsForSectedBoard">Cards for Selected Board</h2>
          <button className="CreateNewCard">Create a New Card</button>
        </section>
      </body>
    </div>
  );
}

export default App;
