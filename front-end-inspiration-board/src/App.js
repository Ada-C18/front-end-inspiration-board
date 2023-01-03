import "./App.css";
import background from "./cork-board.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
      </header>
      <body>
        <section className="container">
          <h2 className="boardSelector">Select an Existing Board </h2>
          <h2 className="boardList">This is the list of boards will go</h2>
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
