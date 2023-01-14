import './App.css';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import BoardList from './Components/BoardList';
import NewBoardForm from './Components/NewBoardForm';
import CardList from './Components/CardList';
import NewCardForm from './Components/NewCardForm';
import RainbowText from 'react-rainbow-text';


const getAllBoardsApi = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/board`
  );
    return response.data;
};

function App() {
  const [allBoardData, setAllBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  // BOARDS
  // Board click
  const handleBoardClick = (title, owner) => {
    setSelectedBoard({ title: title, owner: owner });
    setShowCardForm(true);
  };

  // Get all boards
  useEffect(() => {
    const getAllBoards = async () => {
      const boards = await getAllBoardsApi();
      setAllBoardData(boards);
    };
    getAllBoards();
  }, []);

  // New board form
  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const addBoard = async (boardData) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/board`, boardData)
        const newBoards = [...allBoardData];
        newBoards.push({ ...response.data.board });
        setAllBoardData(newBoards);
  };

  // CARDS
  // Get all cards for selected board
  const getAllCardsApi = useCallback(async () => {
    if (!selectedBoard) {
      return []
    }
    const response = await  axios.get(`${process.env.REACT_APP_BACKEND_URL}/board/${selectedBoard.title}`)
    return response.data.board.cards;
  }, [selectedBoard]);

  useEffect(() => {
    const getAllCards = async () => {
      const cards = await getAllCardsApi();
      setCardsData(cards);
    };
    getAllCards();
  }, [getAllCardsApi] );

  // Delete a card
  const deleteCard = async (card) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`);
    const newCardsData = cardsData.filter((existingCard) => {
      return existingCard.card_id !== card.card_id;
    });
    setCardsData(newCardsData);
  };

  // Likes
  const handleLikes = async (card) => {
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
    const newCardsData = cardsData.map((existingCard) => {
      return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
      });
    setCardsData(newCardsData);
  };

  // Sort attempt **NOT WORKING**
  // const [data, setData] = useState([]);
  // const [sortType, setSortType] = useState('albums');

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       alphabetically: 'message',
  //       likes: 'Likes_count',
  //       id: 'id',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...cards].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]);

  return (
    <div className='whole__page'>
      {/* BOARDS */}
      <h1 className='App__header'>
        <RainbowText lightness={.5} saturation={1}>
          💫  No thoughts Just vibes Inspiration Board  💫
        </RainbowText>
      </h1>
      <section style={{ 
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYknV4AaaHSWrEZmZFZsCZrcFsfKQeFqNeQ&usqp=CAU")` 
        }} className='all__board__container'>
        <section className='board__container'>
          <h2 className='board_header'>🌟  Select a Board to see their inspirational messages  🌟</h2>
          <section className='boards'>
            <BoardList boardData={allBoardData} handleBoardClick={handleBoardClick} />
          </section>
          <section className='select__board'>
            {!selectedBoard ? (<span>👆 Select a board 👆</span>) : 
            (<span>🤩 You selected {selectedBoard.title} made by {selectedBoard.owner} 🤩</span>)}
          </section>
        </section>
        <section className='create__board__form'>
          <h3 className='create__board__header' >✨ Create a Board ✨</h3>
          {isBoardFormVisible ? <NewBoardForm addBoardCallback={addBoard} /> : ''}
          <button className="hide__button" onClick={toggleNewBoardForm}>
          {isBoardFormVisible ? 'Hide Form' : 'Show Form'}
          </button>
        </section>
      </section>
      {/* CARDS */}
      <section>
        {showCardForm ? (
          <div style={{ 
            backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/734ced07-9d10-475f-b63a-cd31b48584e5/d2xhif2-df14212c-955e-44f1-8183-a7271d277cf0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNGNlZDA3LTlkMTAtNDc1Zi1iNjNhLWNkMzFiNDg1ODRlNVwvZDJ4aGlmMi1kZjE0MjEyYy05NTVlLTQ0ZjEtODE4My1hNzI3MWQyNzdjZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.c9PQZA9uwHQaNYlTpEUrKqP93NinlJ6ktXhmOxVhuU4")` 
            }} className='all_card__container'>
            <section className='cards__container'>
              <h4 className='cards__header'>🌟 {selectedBoard.title} Messages 🌟</h4>
              <div className='cards'>
                <CardList
                  cardsData={cardsData}
                  handleLikes={handleLikes}
                  deleteCard={deleteCard}
                />
              <section className='sort_by'>
                Sort messages by
                <select>
                  <option value='alphabetically'>Alphabetically</option>
                  <option value='likes'>Likes</option>
                  <option value='id'>Order Created</option>
                </select>
              </section>
              </div>
            </section>
            <section className='card__form'>
              <NewCardForm />
            </section>
          </div> 
          ) : "" }     
      </section>
    </div>
  );
}

export default App;
