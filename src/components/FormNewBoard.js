import "../styles/FormNewBoard.css";
import { useState } from "react";

const INITIAL_FORM_DATA = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();

    if (formData.title.length === 0) {
      alert("Board must have title");
    } else if (formData.owner.length === 0) {
      alert("Board must have owner");
    } else {
      props.addBoardCallbackFunc(formData);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <form onSubmit={handleNewBoardSubmit}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
          />
          <label htmlFor="owner"></label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            placeholder="Name"
            onChange={handleChange}
          />
          <br />
          <br />
          <input className="button" type="submit" value="Add Board" />
          
          <p>
            {" "}
            <label>Preview Board:</label>
            <br/>
            {formData.title} - {formData.owner}{" "}
          </p>

          <button className="button"  onClick={() => setShow(false)}> Hide New Board Form </button>
        </form>
      ) : (
        <button className="button" onClick={() => setShow(true)}> Create New Board </button>
      )}

      <br />
    </div>
  );
};

export default NewBoardForm;
