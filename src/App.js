import './App.css';
// import axios from 'axios';
import Board from './components/Board';
import CardList from './components/CardList';
import NewCard from './components/NewCard';
import NewBoard from './components/NewBoard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://127.0.0.1:5000'

function App() {

  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  },[]);

  useEffect(() => {
    axios.get(`${url}/boards`, {}).then((response) => {
      setBoardsData(response.data);
    });
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board)
  };

  const boardsElements = boardsData.map((board) => {
    return (
      <li>
        <Board board={board} onBoardSelect={selectBoard}></Board>
      </li>
    )
  });

  // createNewBoard
  const onBoardSubmit = (newBoard) => {
    console.log(newBoard)
    axios.post(`${url}/boards`, newBoard).then((response) => {
      console.log('Response:', response.data.board);
      const boards = [...boardsData];
      boards.push(response.data.board);
      setBoardsData(boards);
    }).catch((error) => {
      console.log('Error: Couldn\'t create new board', error);
      alert('Couldn\'t create new board')
    })
  }

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible)
  };


  // const [cardsData, setCardsData] = useState([]);
  // const [selectedCard, setSelectedCard] = useState({
  //   message: '',
  //   board_id: null
  // },[]);
  // const selectCard = (card) => {
  //   setSelectedCard(card)
  // };
  // const cardElements = cardsData.map((card) => {
  //   return (
  //     <li>
  //       <Card card={card} onBoardSelect={selectCard}></Card>
  //     </li>
  //   )
  // });
  const handleCardSubmit=(data)=>{
    console.log("data",data)
    //call the api endpoints here
    //onBoardSubmit={handleBoardSubmit}
  }
    const handleBoardSubmit=(data)=>{
      //console.log("data",data)
      //call the api endpoints here
      
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
        <div className="board__container">
          <section>
            <h2> New Board</h2>
            <div className="new__board">
            {isBoardFormVisible ? <NewBoard onBoardSubmit={onBoardSubmit}></NewBoard> : ""}
            <div onClick={toggleNewBoardForm} className="board__toggle">{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}</div>
            </div>
          </section>
          <section>
            <h2> New Card</h2>
            <div className="new__card">
            <NewCard onCardSubmit={handleCardSubmit}/>
            </div>
          </section>
          <section>
            <h2>Boards</h2>
            <ul className="boards__list">
            {boardsElements}
            </ul>
          </section>
          <section>
            <h2>Selected Board</h2>
            {selectedBoard.board_id ? <CardList board={selectedBoard}></CardList> : ''}
          </section>
        </div>
        
    </div>
  );
}

export default App;
