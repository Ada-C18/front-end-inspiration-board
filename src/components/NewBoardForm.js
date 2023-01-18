import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const kDefaultFormData = {
  title: "",
  owner: "",
  isHidden: false,
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(kDefaultFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleBoardSubmit(formData);
    setFormData(kDefaultFormData);
  };

  const handleFormData = (event) => {
    const dataValue = event.target.value;
    const dataField = event.target.name;

    const newData = { ...formData, [dataField]: dataValue };
    setFormData(newData);
  };

  const ifTitleEmpty = formData.title ? "" : "empty";
  const ifOwnerEmpty = formData.owner ? "" : "empty";

  const showHideForm = formData.isHidden
    ? "Show New Board Form"
    : "Hide New Board Form";

  const handleHiddenForm = () => {
    return setFormData({ ...formData, isHidden: !formData.isHidden });
  };

  return (
    <section>
      <h2>Create a New Board</h2>
      {formData.isHidden ? null : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              className={ifTitleEmpty}
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="owner">Owner's Name</label>
            <input
              className={ifOwnerEmpty}
              type="text"
              id="owner"
              name="owner"
              value={formData.owner}
              onChange={handleFormData}
            />
          </div>
          <div>
            <p>
              Preview: {formData.title} - {formData.owner}
            </p>
          </div>
          <div>
            <input className="add-button_board" type="submit" value="Add Board" disabled={ifTitleEmpty || ifOwnerEmpty}></input>
          </div>
        </form>
      )}
      <button onClick={handleHiddenForm}>{showHideForm}</button>
    </section>
  );
};

NewBoardForm.propTypes = {
  handleBoardSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;
