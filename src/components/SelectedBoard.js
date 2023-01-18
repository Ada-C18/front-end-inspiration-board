import './SelectedBoard.css';
import CardView from './CardView.js'

const DUMMY_CARD_DATA = [
  {
    id: 1,
    user_id: 1, 
    message: "You are amazing!", 
    likes: 2, 
    date_created: 1/15/23
  },
  {
    id: 2,
    user_id: 3, 
    message: "It is never too late to have a good day", 
    likes: 5, 
    date_created: 1/13/23
  },
  {
    id: 3,
    user_id: 3, 
    message: "Great job on your interviews", 
    likes: 6, 
    date_created: 1/13/23
  },
  {
    id: 4,
    user_id: 3, 
    message: "The future is no place to place your better days", 
    likes: 5, 
    date_created: 1/13/23
  },
  {
    id: 5,
    user_id: 3, 
    message: "Channel that mediocre cishet white man energy! You can do anything!", 
    likes: 5, 
    date_created: 1/13/23
  },
  {
    id: 6,
    user_id: 3, 
    message: "You are not a bad person just b/c you are kinda bad at CSS", 
    likes: 5, 
    date_created: 1/13/23
  },
  {
    id: 7,
    user_id: 3, 
    message: "You are for sure as smart as Ansel", 
    likes: 5, 
    date_created: 1/13/23
  }
]

const SelectedBoard = () => {

  const getCardViewComponentList = (data) => {
    return data.map( (card) => {
      return (
        <li>
          <CardView
            key={card.id}
            id={card.id}
            message={card.message}
            likes={card.likes}
            shadowClass = {card.id % 2 === 1 ? "pink-shadow" : "teal-shadow"}          />
        </li>
      )
    })
  };


  return (
    <div> 
      <div id='sort-div'>
        <select id='sort-dropdown'>
          <option value='sort by number of likes'>Sort by: Number of likes</option>
          <option value='sort alphabetically'>Sort by: Alphabetically</option>
          <option value='sort by id'>Sort by: ID</option>
        </select>
      </div>
      <ul id='board-flex-container'> {getCardViewComponentList(DUMMY_CARD_DATA)} </ul>
    </div>
  )
};

export default SelectedBoard;

