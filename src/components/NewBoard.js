import { useState } from 'react';

//title and owners name are the two attributes
const NewBoard=({onBoardSubmit})=>{
    const[newTitle,setNewTitle]= useState('');
    const[newOwner,setNewOwner]=useState('');
    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
    };
    const handleOwnerChange=(event)=>{
        setNewOwner(event.target.value)
    };
    const handleBoardSubmit=(event)=>{
        event.preventDefault();
        onBoardsubmit(newTitle,newOwner);//
        setNewTitle('')
        setNewOwner('')
        ;
    //using an object to represent to the fields //change handler that would update specific 
        //form on sumbit 
        //packagae title and owner with their speific keys.
    }


return (
    //<div className="new-card">
        //<h2>Create a New Card</h2>
        //form="new-card-form">
        <form onSubmit={handleBoardSubmit}>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={handleTitleChange}/>
            <div><input type="submit" value="title"/></div>
            <label>Owner</label>
            <input type="text" value={newOwner} onChange={handleOwnerChange}/>
        </form>
    //</div>
)

}




export default NewBoard;