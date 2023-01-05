import {useState} from 'react'

const NewBoardForm = () => {

    const [newBoardFormFields, setNewBoardFormFields] = useState(
        {owner: '',
        title: ''}
    )

    const onOwnerChange = (e) => {
        setNewBoardFormFields ({
            ...NewBoardForm,
            owner: e.target.value
        });
    };

    const onTitleChange = (e) => {
        setNewBoardFormFields ({
            ...NewBoardForm,
            title: e.target.value
        });
    };

    return(
        <form>
            <div>
                <label htmlFor = "owner"> Owner:</label>
                <input name = "owner"
                    value = {newBoardFormFields.owner}
                    onChange = {onOwnerChange} />
            </div>
            <div>
                <label htmlFor = "title">Title:</label>
                <input name = "title"
                    value = {newBoardFormFields.title}
                    onChange = {onTitleChange} />
            </div>
            <input 
                type = "submit"
                value = "Add Board" />
        </form>
    );
};

export default NewBoardForm;