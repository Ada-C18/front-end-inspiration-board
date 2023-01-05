import './App.css';
import { useState } from 'react';
import BoardInfo from './components/BoardInfo';


function App() {
  const cardList = [
    { 
    id:1,
    title: 'Great day',
    message: 'Have an awesome today',
    owner: 'Jhon Smith'
    },

    { 
    id:2,
    title: 'Nice',
    message: 'Enjoy your day',
    owner: 'Mary P'
    },

    { 
    id:3,
    title: 'Courage',
    message: 'You can do it',
    owner: 'Nike'
    },

    { 
    id:4,
    title: 'Blue Day',
    message: 'Laugh is a great medicine',
    owner: 'Emma Smith'
    },
];

  const firstCopy = cardList.map((card) => {
    return {...card};
    } );

  const [entries, setEntries] = useState(firstCopy);

  
  return (
    <div className="App">
      <h1> Inspiration Board </h1>

      <h2> Create a New Board</h2>


      <BoardInfo entries={entries}  />

    </div>
  );
}

export default App;
