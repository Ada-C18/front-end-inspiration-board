import { useLoaderData, Link } from "react-router-dom";

import "./Home.css";
import BoardMenu from "../components/BoardMenu";

const Home = () => {
  const loaderData = useLoaderData();

  const { boardArr, getBoardCards, sortBoardMenu, handleLogOut, selectState } =
    loaderData[0];

  const handleSort = (event) => {
    console.log("in handle sort");
    event.preventDefault();
    sortBoardMenu(event.target.value);
  };

  const logOut = () => handleLogOut();

  return (
    <div id="home">
      <header id="home-header">
        <h1> Boards </h1>
        <h2> Select an existing board, or create a board of your own!</h2>
      </header>

      <div id="home-menu">
        <BoardMenu data={boardArr} getBoardCards={getBoardCards} />
      </div>

      <nav id="home-nav">
        <Link to={`/create-board`}>
          <button>Create new board</button>
        </Link>

        <select onChange={handleSort} defaultValue={selectState}>
          <option value="1">Sort list by: Date created (oldest first)</option>
          <option value="2">
            Sort list by: Date created (most recent first)
          </option>
          <option value="3">Sort list by: Popularity (most cards first)</option>
          <option value="4">
            Sort list by: Popularity (least cards first)
          </option>
          <option value="5">Sort list by: Owner (A-Z)</option>
          <option value="6">Sort list by: Owner (Z-A)</option>
        </select>

        {/* filter by -- input with submit?*/}

        {/* <button>Generate an invite link!</button> */}

        <button id="log-out" onClick={() => logOut()}>
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Home;
