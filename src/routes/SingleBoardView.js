import { Link, useLoaderData, useLocation } from "react-router-dom";
import "./SingleBoardView.css";
import AddCard from "../components/AddCard";
import SelectedBoard from "../components/SelectedBoard";
import homeIcon from "../home-icon-dark.png";

const kColorClasses = {
  "#C1D6D9": "green",
  "#F29979": "coral",
  hacker: "hacker",
};

const SingleBoardView = () => {
  const loaderData = useLoaderData();
  const {
    loginState,
    onSubmitCard,
    cards,
    onDeleteCard,
    onLikeCard,
    allBoardsData,
    onSort, 
    selectState
  } = loaderData[0];

  const boardId = useLocation().pathname.split("/").pop();

  const singleBoardArr = allBoardsData.filter((board) => {
    return board.id === Number(boardId);
  });
  const singleBoardObject = singleBoardArr[0];
  const boardTitle = singleBoardObject.title;
  const boardOwner = singleBoardObject.owner;
  const boardOwnerFormatted =
    boardOwner.charAt(0).toUpperCase() + boardOwner.slice(1);

  const cardColor = kColorClasses[singleBoardObject.card_color];

  return (
    <div id="single-board-view">
      <header id="single-board-view-header">
        <h1> {boardTitle} </h1>
        <h2> {boardOwnerFormatted}</h2>
      </header>

      <div id="board-display">
        <SelectedBoard
          cards={cards}
          cardColor={cardColor}
          onDeleteCard={onDeleteCard}
          onLikeCard={onLikeCard}
          onSort={onSort}
          selectState={selectState}
        ></SelectedBoard>
      </div>

      <div id="add-card-and-home">
        <div id="add-card">
          <AddCard
            onSubmitCard={onSubmitCard}
            loginState={loginState}
          ></AddCard>
        </div>

        <Link to={`/boards`}>
          <button id="home-button">
            {" "}
            <img src={homeIcon} alt="home button"></img>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleBoardView;
