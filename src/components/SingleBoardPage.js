import './SingleBoardPage.css';
import AddCard from './AddCard';
import Board from './Board';

const SingleBoardPage = () => {
  return (
    <div className='SingleBoardPage'>
      <Board></Board>
      <AddCard></AddCard>
    </div>
  )
};

export default SingleBoardPage;