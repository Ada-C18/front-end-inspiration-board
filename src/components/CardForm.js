import { useState } from "react";
import PropTypes from "prop-types";
import "./CardForm.css";

const INITIAL_FORM_DATA = {
  message: "",
};

const NewCardForm = ({ addCardCallbackFunc, selectedBoard }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log("handle change called");

    const newFormData = {
      [e.target.name]: e.target.value,
    };
    console.log(newFormData);
    setFormData(newFormData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    addCardCallbackFunc(formData);
  };

  if (selectedBoard.id) {
    return (
      <div>
        <h2>Create A New Card</h2>
        <form>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></input>
          <p>Preview: {formData.message}</p>
          <input
            type="submit"
            value="Submit"
            onClick={handleNewCardSubmit}
            disabled={formData.message.length > 40}
          />
          <p>
            {formData.message.length > 40
              ? "Message can only be 40 characters"
              : ""}
          </p>
        </form>
      </div>
    );
  }
};

NewCardForm.propTypes = {
  addCardCallbackFunc: PropTypes.func.isRequired,
};

export default NewCardForm;
