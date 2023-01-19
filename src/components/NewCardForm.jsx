import React, { useState } from "react";
import PropTypes from "prop-types";
import "../index.css";

function NewCardForm({ postNewCard }) {
  const [cardData, setCardData] = useState({
    message: "",
  });

  const handleChange = (e) => {
    setCardData(e.target.value);
  };

  const submitCardData = (e) => {
    e.preventDefault();

    postNewCard(cardData);

    setCardData({
      message: "",
    });
  };

  return (
    <div>
      <h2>Add a Card</h2>
      <form onSubmit={submitCardData} id="form" className="topBefore">
        <section>
          <div>
            <label htmlFor="message">Your message</label>
            <input
              type="text"
              onChange={handleChange}
              name="message"
              placeholder="Message"
              value={cardData.message}
            />
          </div>

          <div>
            {/* <button type="Submit">Add card</button> */}
            <input type="Submit"></input>
          </div>
        </section>
      </form>
    </div>
  );
}
NewCardForm.propTypes = {
  postNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;
