import './App.css';
import Board from './components/Board';

function App() {

  const boardData = [
    {
      title: 'Board 1',
      author: 'Author 1'
    },
    {
      title: 'Board 2',
      author: 'Author 2'
    },
    {
      title: 'Board 3',
      author: 'Author 3'
    }
  ];

  return (
    <div>
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <Board
          entries={boardData}
        ></Board>
      </main>
    </div>
  );
}

export default App;
