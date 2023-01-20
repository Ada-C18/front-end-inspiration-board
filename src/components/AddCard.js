import { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import './AddCard.css';

const AddCard = () => {
  const loaderData = useLoaderData();

  const boardId = useLocation().pathname.split("/").pop();

  const { onSubmitCard } = loaderData[0];

  const [cardInputValue, setCardInputValue] = useState("");
  const [inputBool, setInputBool] = useState(false);

  const handleInputChange = (event) => {
    setInputBool(true);
    setCardInputValue(event.target.value);
  };

  const submitCard = (event) => {
    event.preventDefault();
    onSubmitCard(cardInputValue, boardId);
    setCardInputValue("");
  };

  return (
    <div>
      <div id='card-preview'>
        {inputBool ? cardInputValue : 'Add a new card to this board!'}
      </div>
      <form id='new-card-form' onSubmit={submitCard}>
        <div>
          <textarea
            type='text'
            value={cardInputValue}
            id='new-card-text'
            onChange={handleInputChange}
            maxLength='40'
            placeholder="Enter your card's message here!"
            required
          />
        </div>
        <div>
          <input type='submit' value='Submit' id='new-card-submit' />
        </div>
      </form>
    </div>
  );
};

export default AddCard;
