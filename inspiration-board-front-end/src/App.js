import "./App.css";
import BoardList from "./components/BoardList";

function App() {
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
