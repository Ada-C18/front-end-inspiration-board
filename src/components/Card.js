<<<<<<< HEAD
import { useState } from "react";

const Card = ({ likes, message }) => {
  // console.log("message: ", message);

  const [likesCount, setLikesCount] = useState(0);

  const increaseLikes = () => {
    setLikesCount((likesCount) => likesCount + 1);
  };

  return (
    <div className="cardContainer card">
      <p className="cardMessage">
        {message} {likesCount}
        <button onClick={increaseLikes}>💜</button>
      </p>
    </div>
  );
};

export default Card;
=======


const Card = (props) => {
  return (<div className='cardItem'>
    
    <p className='card-item__message'>{props.card.message}</p>
    <ul className='cardItemControls'>
      <li><p>❤️</p></li>
      <li><p className='cardItemPlusOne'>+1</p></li>
      <li><p className='cardItemDelete'>Delete</p></li>
    </ul>
  </div>);
};

export default Card;
>>>>>>> f8dee8fb3d8d9b4f6e433ce9ae6065dbfcab132e
