import logo from './logo.svg';
import './App.css';

function App() {
  const boardData = {
    board_id: 92,
    owner: "Ada L.",
    title: "Pick-me-up Quotes",
  };
  
  const cardData = [
    {card_id: 188, likes_count: 3, message: "Effort won't betray you. 💖"},
    {card_id: 186, likes_count: 6, message: "You're like a cup of tea: green! 😍"}
  ];

  const newBoardData = {board_id: null, owner: "", title: ""};

  return (
    <div className="App">
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
        
      </header>
      <main>
          <div className="selectedBoard">
            <h2>{boardData["title"]}</h2> 
          </div>
          <div className ="cardsContainer">
            <p className = "cardMessage">
      
              {cardData[0]["message"]}

            </p>
            <p className = "cardMessage">
              {cardData[1]["message"]}
            </p>
            {/* <img className="likeButton" src="./assets/heart.png" alt="Like Button"></img> */}
          </div>
        
        <section className = "createNew">
          <div className="boardContainer">
            
            <p className = "createBoard">
              <h2>Create New Board</h2>
            </p>
          
          </div>
          <div className="newCardContainer">
            
            <p className = "newCardBoard">
              <h2>Create New Board</h2>
            </p>
          
          </div>
        </section>

      </main>
    </div>
  );

}

export default App;
