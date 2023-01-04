import './SingleBoardView.css';
import AddCard from './AddCard';
import SelectedBoard from './SelectedBoard';

const SingleBoardView= () => {
  return (
    <div className='SingleBoardView'>
      <SelectedBoard></SelectedBoard>
      <AddCard></AddCard>
    </div>
  )
};

export default SingleBoardView;