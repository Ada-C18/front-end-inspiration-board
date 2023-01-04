import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <section id="board-section">
        <div id="board-container">
          <div id="board-list">Put BoardList component here.</div>
          <div id="current-board">Put CurrentBoard component here.</div>
        </div>
        <div id="board-form-container">Put the BoardForm component here.</div>
      </section>
      <section id="card-section">
        <div id="card-list">Put CardList and Card components here.</div>
        <div id="card-form-container">Put CardForm here.</div>
      </section>
    </div>
  );
}

export default App;
