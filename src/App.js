import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import SelectedBoard from './components/SelectedBoard';
// import NewBoardForm from './components/NewBoardForm';
import NewBoardForm from './components/NewBoardForm'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const baseURLBoards = 'http://127.0.0.1:5000/boards'
  const [boardData, setBoardData] = useState([]);
  const kBaseURLCards = 'http://127.0.0.1:5000/cards'
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
    .get(baseURLBoards)
    .then((res) => {
      setBoardData(res.data)
    })
    .catch((err) => console.log(err))
  }, []);

  const handleSubmit = (data) => {
    axios
      .post(kBaseURLCards, data)
      .then((res) => {
        setCardData(res.data)
      })
      .catch((err) => console.log(err));
  };

  const submitForm = (newBoard) => {
    axios.post('http://127.0.0.1:5000/boards', newBoard)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const onSortSelection = (event) => {
    const sortOption = event.target.value;
    const cards = [...cardData]
    setCardData(sortCards(cards, sortOption));
  };

  const sortCards = (cards, sortOption) => {
    if (sortOption === 'likes') {
      cards.sort((a, b) => b.likes_count - a.likes_count);
    } else if (sortOption === 'alphabetically') {
      cards.sort((a, b) => a.message.localeCompare(b.message));
    } else if (sortOption === 'id') {
      cards.sort((a, b) => a.id - b.id);
    }
    return cards;
  };

  const onBoardSelect = (id) => {
    return axios
      .get(`${baseURLBoards}/${id}/cards`)
      .then((res) => {
        setCardData(res.data.cards)})
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
    <main className='app_container'>
      <h1>✨ I N S P I R A T I O N&nbsp;&nbsp;B O A R D ✨</h1>
      <div className='boards'>
        <BoardList boardData={boardData} onBoardSelect={onBoardSelect} />
        <SelectedBoard />
        <NewBoardForm submitForm={submitForm} />
      </div>
      <div className='cards'>
        <CardList 
          cardData={cardData} 
          incrementCounter={incrementCounter} 
          deleteCard={deleteCard} 
          onSortSelection={onSortSelection}
        />
        {cardData.length !== 0 ? <NewCardForm handleSubmit={handleSubmit} />
        : null}
      </div>
    </main>
  )
};

export default App;
