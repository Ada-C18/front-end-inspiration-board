import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CreateBoard.css';
import homeIconWhite from '../home-icon-white.png';
import React from 'react';

const CreateBoard = ({addBoardCallback}) => {
  const [formText, setFormText] = useState('Board title');

  const handleFormChange = (event) => {
    setFormText(event.target.value);
  };

  const submitNewBoard = (event) => {
    event.preventDefault(); 
    addBoardCallback(formText);
    setFormText('Board title')
  };

  return (
    <div id='new-board-view'>

      <h1 id='create-board-heading'>Create a new board</h1>
      
      <form onSubmit={submitNewBoard} id='new-board-form'>
        <div>
          <input type='text' value={formText} onChange={handleFormChange} id='board-title-field'></input>
        </div>
        {/* <div>
          <input type='text' value='Your name (board owner)'></input>
        </div> */}
        <div>
          <input type='submit' value='Submit New Board!' id='submit-button'></input>
        </div>
      </form>
      

      <Link to={`/boards`}>
            <button id='home-button-white'> 
              <img src={homeIconWhite} alt='home button' id='button-img'/>
            </button>
      </Link>

    </div>
  )
};

export default CreateBoard;