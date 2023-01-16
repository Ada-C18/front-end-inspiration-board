import { Link } from "react-router-dom";
import "./SingleBoardView.css";
import AddCard from "../components/AddCard";
import SelectedBoard from "../components/SelectedBoard";
import homeIcon from '../home-icon-dark.png';

const SingleBoardView = () => {
  return (
    <div id="single-board-view">
      <header id='single-board-view-header'>
        <h1> Board Name </h1>
        <h2> Board Owner's Name</h2>
      </header>

      <div id='board-display'>
        <SelectedBoard></SelectedBoard>
      </div>

      <div id='add-card-and-home'>
        <div id='add-card'>
          <AddCard></AddCard>
        </div>

        <Link to={`/boards`}>
            <button id='home-button'> <img src={homeIcon} alt='home button'></img></button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBoardView;


