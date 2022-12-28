import './App.css';
// import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

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
