import React, { useState } from "react";
import PropTypes from "prop-types";

function NewBoardForm({ createNewBoard }) {
  const [formData, setFormData] = useState({
    title: "",
    owner: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.title]: e.target.value });
  };

  const submitBoardForm = (e) => {
    e.preventDefault();

    createNewBoard(formData);

    setFormData({
      title: "",
      owner: "",
    });
  };

  return (
    <div>
      {/* <div>NewBoardForm</div> */}
      <h2>Add a new board</h2>
      <form onSubmit={submitBoardForm}>
        <section>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Board title"
              value={formData.title}
              required
            />
          </div>

          <div>
            <label htmlFor="owner">Owner's Name</label>
            <input
              type="text"
              required
              minLength={5}
              maxLength={6}
              // onChange={handleChange}
              // name="owner name"
              // placeholder="Owner name"
              // value={formData.owner}
            />
          </div>
          <div>
            <h1>
              Preview: -{formData.title} {formData.owner}
            </h1>
          </div>
          <div>
            <button type="submit" value="Add Board">
              Add Board
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
NewBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
};
export default NewBoardForm;
