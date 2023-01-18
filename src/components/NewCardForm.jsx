import React, { useState } from "react";
import PropTypes from "prop-types";
import "../index.css";

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

      <form onSubmit={submitCardData} id="form" className="topBefore">
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
            {/* <button type="Submit">Add card</button> */}
            <input type="Submit"></input>
          </div>
        </section>
      </form>
    </div>
  );
}
NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func.isRequired,
};

// const NewCardForm = (props) => {
//   const [cardData, setCardData] = useState('');
//   const handleMessageChange = (e) => { setCardData(e.target.value) };

//   const submitNewCard = (e) => {
//       e.preventDefault();
//       props.addCardCallBack(cardData);
//       setCardData('');
//   };

//   return (
//       <section className="new-card-form__container">
//       <h2>Add a Card</h2>
//       <form onSubmit={submitNewCard} className="new-card-form">
//           <label>Your Message</label>
//           <input
//           type="text"
//           className={
//               cardData.length === 0 || cardData.length > 40
//               ? "invalid-form-input"
//               : ""
//           }
//           onChange={handleMessageChange}
//           value={cardData}
//           ></input>
//           <p>Preview: {cardData}</p>
//           <input
//           type="Submit"
//           disabled={cardData.length === 0 || cardData.length > 40}
//           className="new-card-form__submit-btn"
//           ></input>
//       </form>
//       </section>
//   );
// };

// NewCardForm.propTypes = {
//   addCardCallBack: PropTypes.func.isRequired,
// };

export default NewCardForm;
