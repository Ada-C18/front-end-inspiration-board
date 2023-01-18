import { useState } from 'react';

//title and owners name are the two attributes
//
const NewBoard=(props)=>{
    const[newTitle,setNewTitle]= useState('');
    const[newAuthor,setNewAuthor]=useState('');
    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
    };
    const handleOwnerChange=(event)=>{
        setNewAuthor(event.target.value)
    };
    const handleBoardSubmit=(event)=>{
        event.preventDefault();
        const newBoard={"title":newTitle,
        "author":newAuthor}
        props.onBoardSubmit(newBoard);//
        setNewTitle('')
        setNewAuthor('')
        ;
    //using an object to represent to the fields //change handler that would update specific 
        //form on sumbit 
        //packagae title and owner with their speific keys.
    }
    //make a dict or an object that connects the titles and the author and it holds //then it's
    // const varaNew={};
    // varaNew.newTitle='';
    // varaNew.newOwner='';

    // {varaNew.map((new)=>(
    //     id={new.id}
    //     title={new.title}
    //     owner={new.owner}
    // ))}


return (
    //<div className="new-card">
        //<h2>Create a New Card</h2>
        //form="new-card-form">
        <form onSubmit={handleBoardSubmit}>
            <div className="newBoard__form">
            <ul>
                <li>
                <div className="newBoard__buttons">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={handleTitleChange}/>
                </div>
                </li>
            
                <li>
                <div className="newBoard__buttons">
                    <label>Owner's Name</label>
                    <input type="text" value={newAuthor} onChange={handleOwnerChange}/>
                    <div><input type="submit" value="Submit"/></div>
                </div>
                </li>
            </ul>
            </div>
        </form>
    //</div>
)

}




export default NewBoard;