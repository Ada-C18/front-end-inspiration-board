import Header from './components/Header';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const baseURLBoards = 'http://127.0.0.1:5000/boards'
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const incrementCounter = (id) => {
    setCardData((prev) => {
      return prev.map((entry) => {
        if (id === entry.id) {
          return {
            ...entry,
            likes_count: entry.likes_count + 1,
          };
        } else {
          return entry;
        }
      });
    });
  };
  return (
    <main>
      <BoardList boardData={boardData} />
      <CardList cardData={cardData} incrementCounter={incrementCounter} />
    </main>
  )
};

export default App;
