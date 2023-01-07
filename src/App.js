import "./App.css";
import Board from "./components/Board";
import Card from "./components/Board";

import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <p>
        <NewBoardForm />
      </p>
      <p>
        <NewCardForm />
      </p>
    </div>
  );
}

export default App;
