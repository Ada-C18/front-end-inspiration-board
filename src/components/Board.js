import CardList from './CardList'
import Dropdown from './Dropdown'
import NewBoardForm from './NewBoardForm'
import NewCardForm from './NewCardForm'
import './Board.css'



const Board = () => {
    return (
        <section className='board-container'>
            <section className='input-section'>
                <label>Choose Board to Display</label>
                <Dropdown></Dropdown>
                <label>Create a Board</label>
                <NewBoardForm></NewBoardForm>
                <label>Create a Card</label>
                <NewCardForm></NewCardForm>
                <h2>Board Title</h2>
            </section>
            <CardList></CardList>
        </section>
    )
}

export default Board;