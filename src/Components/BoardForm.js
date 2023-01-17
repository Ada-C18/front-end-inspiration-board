import { useState } from "react";
import PropTypes from 'prop-types';

const BoardForm = (props) => {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const handleTitleChange = (event) => { setTitle(event.target.value) };
  const handleOwnerChange = (event) => { setOwner(event.target.value) };


  const onSubmitBoard = (event) => {
    console.log("event submitted")
    console.log(event)
    event.preventDefault();
    props.newBoard({
      title, owner
    });
    setTitle('')
    setOwner('')
  }

  return (
    <form onSubmit={onSubmitBoard}>
      <div>
        <label>Title: </label>
        <input
        type='text'
        defaultValue={title}
        onChange={handleTitleChange}></input>
      </div>
      <div>
        <label>Owner: </label>
        <input
        type='text'
        defaultValue={owner}
        onChange={handleOwnerChange}></input>
        <p>{title} - {owner}</p>
      </div>
      <input
          type="Submit"
          defaultValue="Add New Board">
      </input>

    </form>
  );
};

// BoardForm.propTypes = {
//   newBoard: PropTypes.func.isRequired

// }

export default BoardForm;
