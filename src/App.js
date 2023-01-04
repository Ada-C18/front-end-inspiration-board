import "./App.css";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import Card from "./components/Card";

const EXAMPLE_CARD_1 = {
  id: 1,
  boardId: 1,
  message: "test message 1",
  likesCount: 0,
};

const EXAMPLE_CARD_2 = {
  id: 2,
  boardId: 1,
  message: "test message 2",
  likesCount: 0,
};

const EXAMPLE_BOARD_1 = {
  id: 1,
  title: "my first board",
  owner: "jimbo",
  cards: [EXAMPLE_CARD_1, EXAMPLE_CARD_2],
};

const EXAMPLE_BOARD_2 = {
  id: 2,
  title: "my second board",
  owner: "jimbo",
  cards: [],
};

const EXAMPLE_BOARD_LIST = [EXAMPLE_BOARD_1, EXAMPLE_BOARD_2];

const CARDS_ONLY = EXAMPLE_BOARD_1.cards;

function App() {
  return (
    <div className="App">
      <h1>Inspiration Board</h1>
      <section classname="sidebar">
        {/* <BoardForm /> */}
        <BoardList boardsData={EXAMPLE_BOARD_LIST} />
      </section>
      <section>
        <h2>BoardName and BoardOwner</h2>
        <h2>Add New Card</h2>
        {/* <CardForm /> */}
        <div classname="cardDisplay">
          <CardList cardsData={CARDS_ONLY} />
        </div>
      </section>
    </div>
  );
}

export default App;
