import { useState } from "react";
import PropTypes from 'prop-types'

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
    <form onSubmit={handleNewBoardSubmit}>
      <div>
        <label htmlFor="owner"> Owner:</label>
        <input
          name="owner"
          value={newBoardFormFields.owner}
          onChange={onOwnerChange}
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          value={newBoardFormFields.title}
          onChange={onTitleChange}
        />
      </div>
      <input type="submit" value="Add Board" />
    </form>
  );
};

NewBoardForm.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
}
export default NewBoardForm;
