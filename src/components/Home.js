import './Home.css';
import BoardMenu from './BoardMenu';

const Home = (props) => {
  return (
    <div id='home'>

      <header id='home-header'>
        <h1> Boards </h1>
        <h2> Select an existing board, or create a board of your own!</h2>
      </header>

      <BoardMenu data={props.data} id='home-menu'/>

      <nav id='home-nav'>
        <div>
          <button>Create new board</button>
        </div>

        <div>
          <select>
            <option>Sort list by: popularity</option>
            <option>Sort list by: most recent</option>
            <option>Sort list by: owner</option>
          </select>
        </div>

        <div>
          <button>Click here to generate an invite link</button>
        </div>
        
      </nav>

    </div>
  )
};

export default Home;

