import CardList from './CardList'
import Dropdown from './Dropdown'
import NewBoardForm from './NewBoardForm'
import NewCardForm from './NewCardForm'
import './Board.css'
import Card from './Card'



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
            <div className='card1'><Card></Card></div>
            <div className='card2'><Card></Card></div>
            <div className='card3'><Card></Card></div>
            <div className='card4'><Card></Card></div>
            <div className='card5'><Card></Card></div>
            <div className='card6'><Card></Card></div>
            <div className='card7'><Card></Card></div>
            <div className='card8'><Card></Card></div>

            {/* <CardList></CardList> */}
        </section>
    )
}

export default Board;