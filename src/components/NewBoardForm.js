import { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const NewBoardForm = (props) => {
  const [newBoardFormFields, setNewBoardFormFields] = useState({
    owner: "",
    title: "",
  });

  const onOwnerChange = (e) => {
    console.log(e.target.value);
    setNewBoardFormFields({
      ...newBoardFormFields,
      owner: e.target.value,
    });
  };

  const onTitleChange = (e) => {
    setNewBoardFormFields({
      ...newBoardFormFields,
      title: e.target.value,
    });
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    props.addBoardCallbackFunc(newBoardFormFields);
  };

  return (
    <form className="container" onSubmit={handleNewBoardSubmit}>
      <formset>
        <legend> Create a New Board </legend>
        <div className="input-fields">
          <label htmlFor="owner">OWNER</label>
          <input
            name="owner" placeholder="Who owns this board?"
            value={newBoardFormFields.owner}
            onChange={onOwnerChange}
          />
        </div>
        <div className="input-fields">
          <label htmlFor="title">TITLE</label>
          <input
            name="title"
            placeholder="What do you want to call this board?"
            value={newBoardFormFields.title}
            onChange={onTitleChange}
          />
        </div>
        <div className="submit-button-container">
          <input className="submit-button" type="submit" value="Add Board" />
        </div>
      </formset>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoard: PropTypes.func,
};
export default NewBoardForm;
