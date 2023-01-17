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
