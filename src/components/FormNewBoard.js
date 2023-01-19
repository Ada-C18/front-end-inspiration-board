import "../styles/FormNewBoard.css";
import { useState } from "react";

const INITIAL_FORM_DATA = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formErrors, setFormErrors] = useState({});
  const [isValidInput, setIsValidInput] = useState(true);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formData));
  };

  const validateForm = (values) => {
    const errors = {};

    if (formData.title.length === 0) {
      errors.title = "Board must have title";
      setIsValidInput(false);
    } else if (formData.owner.length === 0) {
      errors.owner = "Board must have owner";
      setIsValidInput(false);
    } else {
      props.addBoardCallbackFunc(formData);
      setIsValidInput(true);
    }
    return errors;
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
            className={isValidInput ? "valid" : "invalid"}
          />
          <label htmlFor="owner"></label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            placeholder="Name"
            onChange={handleChange}
            className={isValidInput ? "valid" : "invalid"}
          />
          <p className="formError">{formErrors.title}</p>
          <p className="formError">{formErrors.owner}</p>

          <br />
          <input className="button" type="submit" value="Add Board" />

          <p>
            {" "}
            <label>Preview Board:</label>
            <br />
            {formData.title} - {formData.owner}{" "}
          </p>

          <button className="button" onClick={() => setShow(false)}>
            {" "}
            Hide New Board Form{" "}
          </button>
        </form>
      ) : (
        <button className="button" onClick={() => setShow(true)}>
          {" "}
          Create New Board{" "}
        </button>
      )}

      <br />
    </div>
  );
};

export default NewBoardForm;
