import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>INSPIRATION BOARD</header>
      <section>
        <h1 className="board"> Boards </h1>
        <h1 className="board"> Selected Board </h1>
        <h1 className="board"> Create A New Board </h1>
      </section>
      <section>
        <h1 className="card"> Cards for Reminders </h1>
        <h1 className="card"> Create a New Card</h1>
      </section>
      <footer>
        <p> Click here to delete all boards and cards</p>
      </footer>
    </div>
  );
}

export default App;
