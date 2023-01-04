import './App.css';
// import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

//POST,GET,DELETE TO API:

const REACT_APP_BACKEND_URL = 'http://localhost:5000';

// Destructure and convert python naming convention to JSON.
const boardApiToJson = (board) => {
  const { board_id: boardId, title, owner } = board;
  return { boardId, title, owner };
};

// Post Board
// ERR if no input
// Get ALL Boards
// Get One Board
// Delete All Boards

//Post Card
// ERR if left blank
// ERR if over >40 characters
// Delete One Card

// functions
//onSubmit board
//onShow Board (shows cards)
//onHide Board Form
//onSubmit card
//add heart
//delete card
//delete board if time permits

function App() {
  return (
    <div className='App'>
      <header>
        <h2>Inspiration Board</h2>
      </header>
      <main>
        <BoardForm />
        <BoardList />
        <CardForm />
        <CardList />
      </main>
    </div>
  );
}

export default App;
