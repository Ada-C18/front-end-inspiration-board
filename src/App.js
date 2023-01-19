import './App.css';
// import axios from 'axios';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';
import NewCard from './components/NewCard';
import NewBoard from './components/NewBoard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://127.0.0.1:5000'

function App() {

  const [cardsData, setCardsData] = useState([]);

  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    author: '',
    cards:[],
    board_id: 1
  },[]);

  // console.log(selectedBoard)

  useEffect(() => {
    axios.get(`${url}/boards`, {}).then((response) => {
      setBoardsData(response.data);
    });
  }, []);

  const onBoardClick = (board) => {
    console.log(onBoardClick)
    axios.get(`${url}/boards/${board.id}`).then((response) => {
      setSelectedBoard(response.data);
      setCardsData(response.data.cards);
      
  }).catch((error) => {
      console.log('Error: Couldn\'t get all cards', error)
      alert('Couldn\'t get all cards')
  });
  };


  const selectBoard = (board) => {
    setSelectedBoard(board)
  };

  const boardsElements = boardsData.map((board) => {
    // console.log(board)
    // console.log(onBoardClick)
    return (
      <li>
        <Board board={board} onBoardSelect={selectBoard} onBoardClick = {onBoardClick}></Board>
      </li>
    )
  });



  // createNewBoard
  const onBoardSubmit = (newBoard) => {
    console.log(newBoard)
    axios.post(`${url}/boards`, newBoard).then((response) => {
      console.log('Response:', response.data);
      const boards = [...boardsData];
      boards.push(response.data);
      setBoardsData(boards);
    }).catch((error) => {
      console.log('Error: Couldn\'t create new board', error);
      alert('Couldn\'t create new board')
    })
  }
  //when the page loads theres no currently selected board which is prompting an error so what we need then is guard clause so you dont retreieve the cards if there i sno slected boar!!
  const onCardSubmit=(newCard)=>{
    console.log(newCard)
    axios.post(`${url}/boards/${selectedBoard.id}/cards`, newCard).then((response) => {
      console.log('Response:', response.data);
      const cards = [...cardsData];
      cards.push(response.data);
      setCardsData(cards);
    }).catch((error) => {
      console.log('Error: Couldn\'t create new card', error);
      alert('Couldn\'t create new card')
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
    //console.log("data",data)
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
            <NewCard onCardSubmit={onCardSubmit}></NewCard>
            {/* <NewCard onCardSubmit={handleCardSubmit}></NewCard> */}
            
            </div>
          </section>
          <section>
            <h2>Boards</h2>
            <ul className="boards__list">
            {boardsElements}
            </ul>
          </section>
          <section>
            <CardList board={selectedBoard} ></CardList>
        
            <h2>Selected Board</h2> 

            

            {/* <Board> {selectedBoard.board_id} ? `${selectedBoard.title} - ${selectedBoard.author}` </Board> */}
            {/* <p>{selectBoard.board_id ? `${selectBoard.title} - ${selectBoard.author}` : 'Select a Board from the Board List!'}</p> */}
    
          </section>
          {/* <Board board={onBoardSelect}></Board> */}
        </div>
        
    </div>
  );

  };
export default App;
