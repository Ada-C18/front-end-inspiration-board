import './App.css';
import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import Review from './components/Review';

function App() {
  return (
    <div className='App'>
      <BoardForm></BoardForm>
      <BoardList></BoardList>
      <CardForm></CardForm>
      <CardList></CardList>
      <Review></Review>
    </div>
  );
}

export default App;
