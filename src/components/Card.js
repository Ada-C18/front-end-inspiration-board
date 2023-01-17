

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