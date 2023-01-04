import React from 'react';
import './App.css';
import LogInView from './components/LogInView';
import Home from './components/Home';
import SingleBoardView from './components/SingleBoardView';

function App() {
  return (
    <div className='App'>
      <LogInView></LogInView>
      <Home></Home>
      <SingleBoardView></SingleBoardView>
    </div>
  );
}

export default App;