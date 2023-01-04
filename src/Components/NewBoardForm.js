import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({ addBoardCallback }) => {
  const [boardData, setBoardData] = useState({
    title: '',
    ownersName: '',
  });

  const submitBoardData = (e) => {
    e.preventDefault();

    addBoardCallback(boardData);
    setBoardData({ title: '', ownersName: ''});
  };

  const handleChange = (e) => {
    setBoardData({ ...boardData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitBoardData} className="new-board__form">
      <section>
        <div className="new-board__fields">
          <label htmlFor="name">Title</label>
          <input
            name="title"
            id="title"
            value={boardData.title}
            onChange={handleChange}
            className={((boardData.title.length === 0)) ? 'invalid-form-input' : ''}

          />
          <label htmlFor="name">Owner's Name</label>
          <input
            name="ownersName"
            id="ownersName"
            value={boardData.ownersName}
            onChange={handleChange}
            className={((boardData.ownersName.length === 0)) ? 'invalid-form-input' : ''}
          />
          <p>Preview: {boardData.title} - {boardData.ownersName}</p>


          <button className="button new-board__submit" type="submit"
            disabled={((boardData.title.length === 0) || (boardData.ownersName.length === 0))}>
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
