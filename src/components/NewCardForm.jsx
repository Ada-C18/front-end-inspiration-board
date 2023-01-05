import React, { useState } from "react";
import PropTypes from "prop-types";

function NewCardForm({ addCardCallBack }) {
  const [cardData, setCardData] = useState({
    message: "",
  });

  const handlechange = (e) => {
    setCardData(e.target.value);
  };

  const submitCardData = (e) => {
    e.preventDefault();

    addCardCallBack(cardData);

    setCardData({
      message: "",
    });
  };

  return (
    <div>
      <h2>Add a Card</h2>

      <form onSubmit={submitCardData}>
        <section>
          <div>
            <label htmlFor="message">Your message</label>
            <input
              type="text"
              onChange={handlechange}
              name="message"
              placeholder="Message"
              value={cardData.message}
            />
          </div>
          <div>
            <button type="submit" value="Add Card">
              Add card
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func.isRequired,
};
export default NewCardForm;
