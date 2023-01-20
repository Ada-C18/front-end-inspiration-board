import { Link, useLoaderData } from "react-router-dom";
import "./SingleBoardView.css";
import AddCard from "../components/AddCard";
import SelectedBoard from "../components/SelectedBoard";
import homeIcon from '../home-icon-dark.png';

const SingleBoardView = () => {

  const loaderData = useLoaderData();
  const {loginState, onSubmitCard, cards, onDeleteCard} = loaderData[0];

  return (
    <div id="single-board-view">
      <header id='single-board-view-header'>
        <h1> Board Name </h1>
        <h2> Board Owner's Name</h2>
      </header>

      <div id='board-display'>
        <SelectedBoard cards={cards} onDeleteCard={onDeleteCard}></SelectedBoard>
      </div>

      <div id='add-card-and-home'>
        <div id='add-card'>
          <AddCard onSubmitCard={onSubmitCard} loginState={loginState}></AddCard>
        </div>

        <Link to={`/boards`}>
            <button id='home-button'> <img src={homeIcon} alt='home button'></img></button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBoardView;


