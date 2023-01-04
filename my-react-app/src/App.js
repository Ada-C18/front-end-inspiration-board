import "./App.css";

// import BikeList from "./components/BikeList.js";
// import axios from "axios";
import NewBoard from "./components/NewBoard";
import BoardList from "./components/BoardList";

function App() {
  // const addBoard = (newBoardInfo) => {
  //   axios.post(URL, newBoardInfo)
  //   .then((response)=>{
  //     //fetchAllBikes();  //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
  //     const newBoards = [...bikesList];
  //     const newBikeJSON={
  //       ...newBikeInfo,
  //       "id": response.data.id
  //     }
  //     newBikes.push(newBikeJSON);
  //     setBikesList(newBikes); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });
  // }

  const boardList = [
    {
      id: 1,
      title: "titletest",
      name: "nametest",
    },
    {
      id: 2,
      title: "titletest2",
      name: "nametest2",
    },
  ];

  return (
    <div className="App">
      <h1 className="App-header"> Mindful Moments</h1>
      <h2>BOARDS</h2>
      <main>
        <BoardList boardList={boardList} /* entries={Board}*/ />
      </main>
      <h2>SELECTED BOARDS</h2>
      <h2>CREATE NEW BOARD</h2>
      <NewBoard></NewBoard>
      <h2>CARDS FOR "selected board"</h2>
      {/* <NewCardForm></NewCardForm> */}
      <h2>CREATE NEW CARD</h2>
      {/* <main>
        <CardsList entries={singleCard} />
      </main> */}
    </div>
  );
}

export default App;
