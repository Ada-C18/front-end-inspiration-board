import { useLoaderData } from "react-router-dom";

import "./Home.css";
import BoardMenu from "./BoardMenu";

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
          <button>Click here to generate an invite link!</button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
