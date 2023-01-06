import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="project-title">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section className="board-list">
          <h2>Boards</h2>
          <div>Need to insert BoardList component</div>
        </section>
        <section className="selected-board">
          <h2>Selected Board</h2>
          <p>Select a Board from the Board List!</p>
          <div>Need to insert selected Board</div>
        </section>
        <section className="add-new-board">
          <h2>Create a New Board</h2>
          <div>Need to insert NewBoardForm component</div>
        </section>
        <section className="cards">
          <h2>Cards for Pick-me-up Quotes</h2>
          <div>Need to insert CardList component</div>
        </section>
        <section className="add-new-card">
          <h2>Create a New Card</h2>
          <div>Need to insert NewCardForm component</div>
        </section>
      </main>
      <footer>
        <p>Copyright Build by Vivian, Tatiana, Viktoriia 2023</p>
      </footer>
    </div>
  );
}

export default App;
