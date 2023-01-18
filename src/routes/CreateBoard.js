import { Link, useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import "./CreateBoard.css";
import homeIconWhite from "../home-icon-white.png";

const CreateBoard = () => {
  const loaderData = useLoaderData();
  const [formData, setFormData] = useState({
    title: "",
    cardColor: "#C1D6D9",
  });
  const [submitted, setSubmitted] = useState(false);

  const { onCreate: handleSubmit } = loaderData[0];

  const handleTextChange = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleSelectChange = (event) => {
    setFormData({ ...formData, cardColor: event.target.value });
    setSubmitted(false);
  };

  const submitNewBoard = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({
      title: "",
      cardColor: "#C1D6D9",
    });
    setSubmitted(true);
  };

  return (
    <div id="new-board-view">
      <h1 id="create-board-heading">Create a new board</h1>

      <form onSubmit={submitNewBoard} id="new-board-form">
        <div>
          <input
            type="text"
            value={formData.title}
            placeholder="Board title"
            onChange={handleTextChange}
            id="board-title-field"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="cardColor">Choose a card color:</label>
          <select
            id="colorSelect"
            name="cardColor"
            onChange={handleSelectChange}
          >
            <option value="#C1D6D9">Green</option>
            <option value="#F29979">Coral</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Submit New Board!"
            id="submit-button"
          ></input>
        </div>
      </form>
      <div>{submitted && <p>Board created!</p>}</div>
      <Link to={`/boards`}>
        <button id="home-button-white">
          <img src={homeIconWhite} alt="home button" id="button-img" />
        </button>
      </Link>
    </div>
  );
};

export default CreateBoard;
