import "./App.css";
import BoardList from "./components/BoardList.js";

const INITIAL_BOARDS = [
  {
    id: 1,
    title: "Encouraging Notes",
    owner: "June",
  },
  {
    id: 2,
    title: "Sage Advice",
    owner: "Jasmine",
  },
  {
    id: 3,
    title: "Mindfulness Tips!",
    owner: "Tapasya",
  },
];

function App() {
  console.log("hello world!");

  return (
    <div>
      <BoardList></BoardList>
    </div>
  );
}

export default App;
