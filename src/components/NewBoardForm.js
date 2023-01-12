import React from 'react';
import { useState } from 'react';
import './NewBoardForm.css';


const NewBoardForm = ({ addBoardCallback , afterSubmitMessage }) => {
  // hide form button - use ternary

  const [boardData, setBoardData] = useState({
    title: '',
    owner: '',
  });

  const submitBoardData = (event) => {
    event.preventDefault();
    addBoardCallback(boardData);
    setBoardData({ title: '', owner: ''});
  };

  const handleChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value });
  };
  
  return (
    <section className="new-board__section">
      <h2 id='add-board'>Add a New Board</h2>
      <div id="line" />
      <form onSubmit={submitBoardData} className="new-board__form">
          <div className="new-board__fields">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              id="title"
              value={boardData.title}
              onChange={handleChange}
            />
            <label htmlFor="owner">Owner</label>
            <input
              name="owner"
              id="owner"
              value={boardData.owner}
              onChange={handleChange}
            />
            <button className="button new-board" type="submit">
              Add Board
            </button>
            <button className="button new-board" type="submit">
              Hide Form
            </button>
            <p>
              {afterSubmitMessage}
            </p>
          </div>
      </form>
    </section>
  );
};

export default NewBoardForm;