import { useState } from 'react';
import './AddCard.css';

const AddCard = () => {

  const [cardInputValue, setCardInputValue] = useState("Enter your card's message here!")
  //inputBool tracks whether or not anything has been typed in the new card form, used in like 18 to determine what text to display 
  const [inputBool, setInputBool] = useState(false)

  const inputChange = (event) => {
    setInputBool(true);
    setCardInputValue(event.target.value);
  }

  return (
    <div>
      <div id='card-preview'>
        {inputBool ? cardInputValue : 'Add a new card to this board!' }
      </div>
      <form id='new-card-form'>
        <div>
          <input type='text' value={cardInputValue} id='new-card-text' onChange={inputChange}/>
        </div>
        <div>
          <input type='submit' value='Submit' id='new-card-submit' />
        </div>
      </form>
    </div>
  )
}

export default AddCard;