import { React, useState } from "react";
import "./NewCardForm.css";

const INITIAL_FORM_DATA = {
  message: "",
  like_count: "",
};

const NewCardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    // console.log("handleChange called");
    // console.log(
    //  `Target name: ${e.target.name} Target value: ${e.target.value}`
    //);
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallbackFunc(formData);
    setFormData({
      message: "",
      like_count: "",
    });
  };

  return (
    <nav>
      <div>
        <h2>Create A New Card:</h2>
        <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message">Card Message</label>
      {/* htmlFor - for accessibility */}
      <input
        className="create-card-input"
        type="text"
        // id="title"
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></input>

      <label htmlFor="like_count">Like Count</label>
      <input
        className="create-card-input"
        type="number"
        // id="owner"
        name="like_count"
        value={formData.like_count}
        onChange={handleChange}
      ></input>
      <input id="submit-btn" type="submit" value="Add Card" />
    </form>
      </div>
      
    </nav>
    
  );
};

export default NewCardForm;
