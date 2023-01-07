import './App.css';
import { useEffect, useState } from 'react';
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
  const [selectedBoard, setSelectedBoard] = useState('');
  const [showCardForm, setShowCardForm] = useState(false);

  // Board click
  const handleBoardClick = (title, owner) => {
    setSelectedBoard({ title: title, owner: owner });
    setShowCardForm(true);
  };

  // Get all boards
  const getAllBoards = () => {
    return getAllBoardsApi()
      .then((boards) => {
        setAllBoardData(boards);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getAllBoards();
  }, []);

  // New Board Form
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };


  const addBoard = async (boardData) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/board`, boardData)
        const newBoards = [...allBoardData];
        newBoards.push({ ...response.data.board });
        setAllBoardData(newBoards);
  };


  return (
    <div className='whole__page'>
      <h1 className='App__header'>
        <RainbowText lightness={.5} saturation={1}>
          💫  No thoughts Just vibes Inspiration Board  💫
        </RainbowText>
      </h1>
      <section className='all__board__container'>
        <section className='board__container'>
          <h2 className='board_header'>🌟  Choose a Board to see their inspirational messages  🌟</h2>
          <section className='boards'>
            <BoardList boardData={allBoardData} handleBoardClick={handleBoardClick} />
          </section>
          <section className='chosen__board'>
            {!selectedBoard ? (<span>👆 Select a board 👆</span>) : 
            (<span>🤩 You chose {selectedBoard.title} made by {selectedBoard.owner} 🤩</span>)}
          </section>
        </section>
        <section className='board__form'>
          <h3 className='new__board' >✨ Create a Board ✨</h3>
          {isBoardFormVisible ? <NewBoardForm addBoardCallback={addBoard} /> : ''}
          <button className="hide__button" onClick={toggleNewBoardForm}>
          {isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}
          </button>
        </section>
      </section>
      <section className='card__container'>
          {/* Card Form */}
          {showCardForm ? (
            <section>
              <CardList board={selectedBoard} />
              <NewCardForm />
            </section>
          ) : (
            <section></section>
          )}
      </section>
    </div>
  );
}

export default App;
