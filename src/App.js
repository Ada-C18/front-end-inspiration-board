import React from 'react';
import './App.css';
import LogInView from './components/LogInView';
import Home from './components/Home';
import SingleBoardView from './components/SingleBoardView';

const DUMMY_BOARD_DATA = [
  {
    id: 1, 
    // FKs card_id and user_id?
    date_created: '24',
    board_title: 'Capstone Inspo',
    board_owner: 'Anna', 
    visible: true
  },
  {
    id: 2, 
    // FKs card_id and user_id?
    date_created: '25',
    board_title: 'Interview Inspo',
    board_owner: 'Emily', 
    visible: true
  },
  {
    id: 3, 
    // FKs card_id and user_id?
    date_created: '26',
    board_title: 'Ada Fun',
    board_owner: 'Kumi', 
    visible: true
  },
  {
    id: 4, 
    // FKs card_id and user_id?
    date_created: '27',
    board_title: 'React excitement',
    board_owner: 'Katherine', 
    visible: true
  }
]


function App() {
  return (
    <div className='App'>
      <LogInView></LogInView>
      <Home data={DUMMY_BOARD_DATA}></Home>
      <SingleBoardView></SingleBoardView>
    </div>
  );
}

export default App;


