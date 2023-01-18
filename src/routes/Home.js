import { useLoaderData } from "react-router-dom";

import "./Home.css";
import BoardMenu from "../components/BoardMenu";

const Home = (props) => {
  const dummyData = useLoaderData();

  return (
    <div id="home">
      <header id="home-header">
        <h1> Boards </h1>
        <h2> Select an existing board, or create a board of your own!</h2>
      </header>

      <div id="home-menu">
        <BoardMenu data={dummyData} />
      </div>

      <nav id="home-nav">
        <button>Create new board</button>

        <select>
          <option>Sort list by: popularity</option>
          <option>Sort list by: most recent</option>
          <option>Sort list by: owner</option>
        </select>

        <button>Generate an invite link!</button>

        <button>Log out</button>
      </nav>
    </div>
  );
};

export default Home;
