import { useState } from 'react';

//title and owners name are the two attributes
//
const NewBoard=(props)=>{
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
        props.onBoardSubmit(newTitle,newOwner);//
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
            <label>Owner's Name</label>
            <input type="text" value={newOwner} onChange={handleOwnerChange}/>
            <div><input type="submit" value="submit"/></div>

             
        </form>
    //</div>
)

}




export default NewBoard;