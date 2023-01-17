import { Link } from 'react-router-dom';
import './CreateBoard.css';
import homeIconWhite from '../home-icon-white.png';

const CreateBoard = () => {
  return (
    <div id='new-board-view'>

      <h1 id='create-board-heading'>Create a new board</h1>
      
      <form id='new-board-form'>
        <div>
          <input type='text' value='Board title' id='board-title-field'></input>
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