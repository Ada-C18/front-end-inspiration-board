// import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

function App() {

  // axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rykaliva Inspiro Board</h1>
      </header>
      <main>
        <Board></Board>
      </main>
    </div>
  );
}

export default App;
