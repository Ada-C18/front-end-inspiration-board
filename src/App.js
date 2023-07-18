import Header from './components/Header';
import BoardList from './components/BoardList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const baseURLBoards = 'http://127.0.0.1:5000/boards'
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
    .get(baseURLBoards)
    .then((res) => {
      console.log(res.data)
      setBoardData(res.data)
    })
    .catch((err) => console.log(err))
  }, []);

  return (
    <main>
      <Header />
      <BoardList boardData={boardData} />
    </main>
  )
};

export default App;
