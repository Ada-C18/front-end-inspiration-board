import Header from './components/Header';
import BoardList from './components/BoardList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const baseURLBoards = 'http://127.0.0.1:5000/boards'
  const [boardData, setBoardData] = useState([]);

  return (
    <main>
      <BoardList boardData={boardData} />
    </main>
  )
};

export default App;
