import './BoardMenuItem.css';

const BoardMenuItem = (props) => {



  //Also need to figure out how to calculate # of likes
  
  return (
    
    <li>
      <button className={`menu-item ${props.class}`}>{props.title}        # likes</button>
    </li>
  )
};

export default BoardMenuItem;