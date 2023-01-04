import './Home.css';
import BoardMenu from './BoardMenu';
import CreateBoard from './CreateBoard';

const Home = () => {
  return (
    <div className='Home'>
      <BoardMenu></BoardMenu>
      <CreateBoard></CreateBoard>
    </div>
  )
};

export default Home;

