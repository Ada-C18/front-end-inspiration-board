// import Header from './components/Header';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const baseURLBoards = 'http://127.0.0.1:5000/boards'
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
    .get(baseURLBoards)
    .then((res) => {
      console.log(res.data)
      setBoardData(res.data)
    })
    .catch((err) => console.log(err))
  }, []);

  const onBoardSelect = (id) => {
    return axios
      .get(`${baseURLBoards}/${id}/cards`)
      .then((res) => setCardData(res.data.cards))
      .catch((err) => console.log(err))
  };

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

  const deleteCard = (id) => {
    setCardData((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <main>
      <BoardList boardData={boardData} onBoardSelect={onBoardSelect} />
      <CardList cardData={cardData} incrementCounter={incrementCounter} deleteCard={deleteCard}/>
    </main>
  )
};

export default App;
