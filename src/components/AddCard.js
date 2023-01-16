import './AddCard.css';

const AddCard = () => {
  return (
    <div>
      <div id='card-preview'>
        Add a new card to this board!
      </div>
      <form id='new-card-form'>
        <div>
          <input type='text' value="Enter your card's message here!" id='new-card-text'/>
        </div>
        <div>
          <input type='submit' value='Submit' id='new-card-submit' />
        </div>
      </form>



    </div>
  )
}

export default AddCard;