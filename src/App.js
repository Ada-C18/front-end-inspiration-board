import 
import Board from './components/Board.js';
import CardList from './components/CardList.js';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import './App.css';


const BOARDS = [
  {
    id: 1,
    title: 'pick me',
    owner: 'Wanjun'
  },
  {
    id: 2,
    title: 'testing',
    owner: 'Sarah'
  }
];


function App() {
  const boardsCopy = BOARDS.map((board) => {
    return {
      ...board
    };
  });

  const [boardsList, setBoardsList] = useState(boardsCopy)


  return (
    <body>
      <div class="container">
        <header>
          <section>
            <h1>SELECTED BOARD</h1>
            <p>Owner Name</p>
          </section>
          <section>
            <h2>Create A New Card</h2>
            <NewCardForm></NewCardForm>
          </section>
        </header>
        <aside>
          <section>
            <h1>Create A New Board</h1>
            <NewBoardForm></NewBoardForm>
          </section>
          <section>
            <h1>Boards</h1>
            <Board></Board>
          </section>
        </aside>
        <main>
          <div>
            <h1>Cards for Affirmations</h1>
            <CardList></CardList>
          </div>
        </main>
      </div>
    </body>
  );
};

export default App;
