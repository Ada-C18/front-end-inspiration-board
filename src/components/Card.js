import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  return(
    <section>
      <p>{props.message}</p>
      <p>{props.likes ` ❤️`} </p>
      <button>
        {/* like card */}
      </button>
        {/* delete card */}
      <button>

      </button>
    </section>
  )
}

Card.propTypes = {
  message: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  // delete card function
  // like card function
}

export default Card