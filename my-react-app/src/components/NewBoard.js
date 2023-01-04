import "./NewBoard.css";
import PropTypes from "prop-types";

import { useState } from "react";

const INITIAL_FORM_DATA = {
  title: "",
  name: "",
};

const NewBoard = () => {
  const [BoardData, setBoardData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    let datafield = e.target.value;
    const NewBoardData = {
      ...BoardData,
      [e.target.name]: datafield,
    };
    setBoardData(NewBoardData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    // props.addBoardCallbackFunc(BoardData);
  };
  return (
    <form onSubmit={handleNewBoardSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={BoardData.title}
        onChange={handleChange}
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={BoardData.name}
        onChange={handleChange}
      />

      <input type="submit" value="Add Board" />
    </form>
  );
};

// {
//   /* NewBoard.propTypes = {
//       // addBoardCallbackFunc: PropTypes.func.isRequired
//     }; */
// }
export default NewBoard;
