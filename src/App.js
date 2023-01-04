import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import SingleBoardPage from './components/SingleBoardPage';

function App() {
  return (
    <div className='App'>
      <LoginPage></LoginPage>
      <Home></Home>
      <SingleBoardPage></SingleBoardPage>
    </div>
  );
}

export default App;