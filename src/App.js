import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import SelectedBoard from './components/SelectedBoard';
import NewBoardForm from './components/NewBoardForm'
import { useEffect, useState } from 'react';
// import Foot from './components/Foot';
import axios from 'axios';
import './App.css';

function App() {
  const kBaseURLBoards = 'http://127.0.0.1:5000/boards'
  const kBaseURLCards = 'http://127.0.0.1:5000/cards'

  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({});

  const fetchBoards = () => {
    axios
    .get(kBaseURLBoards)
    .then((res) => {
      setBoardData(res.data)
    })
    .catch((err) => console.log(err))
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const handleSubmit = (data) => {
    axios
    .post(kBaseURLCards, data)
    .then((res) => {
      console.log(res.data);
      linkCardToBoard(res.data.id)
    })
    .catch((err) => console.log(err));
  };

  const linkCardToBoard = (data) => {
    const newCardId = {id: data}

    axios
    .post(`${kBaseURLBoards}/${selectedBoard.id}/cards`, newCardId)
    .then((res) => {
      console.log(res.data);
      onBoardSelect(selectedBoard.id);
    })
    .catch((err) => console.log(err));
  };

  const submitForm = (newBoard) => {
    axios.post('http://127.0.0.1:5000/boards', newBoard)
    .then((response) => {
      setBoardData((prevBoardData) => 
        [...prevBoardData, newBoard])
      console.log(response);
      fetchBoards();
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
      .get(`${kBaseURLBoards}/${id}/cards`)
      .then((res) => {
        setCardData(res.data.cards)
        setSelectedBoard(res.data)})
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
    // add axios call to delete one card
  };

  const deleteAll = () => {
    axios
    .delete('http://127.0.0.1:5000/boards')
    .then((res) => {
      setBoardData([]);
      console.log(res);
    })
    .catch((err) => console.log(err));

    axios
    .delete('http://127.0.0.1:5000/cards')
    .then((res) => {
      setCardData([]);
      console.log(res);
    })
      .catch((err) => console.log(err));
  };

  return (
    <main className='app_container'>
      <h1>✨ I N S P I R A T I O N&nbsp;&nbsp;B O A R D ✨</h1>
      <div className='boards'>
        <BoardList boardData={boardData} onBoardSelect={onBoardSelect} />
        <SelectedBoard selectedBoard={selectedBoard}/>
        <NewBoardForm submitForm={submitForm} />
      </div>
      <div className='cards'>
        <CardList 
          cardData={cardData} 
          incrementCounter={incrementCounter} 
          deleteCard={deleteCard} 
          onSortSelection={onSortSelection}
          selectedBoard={selectedBoard}
        />
        {Object.keys(selectedBoard).length > 0 && <NewCardForm handleSubmit={handleSubmit} />}
      </div>
      <footer className='app-footer'>
        <p>This is a demo! Please be gentle! Click <a href="#" onClick={deleteAll}>here</a> to delete all boards and cards.</p>
      </footer>
      {/* <Foot onDelete={deleteAll}/> */}
    </main>
  )
};

export default App;
