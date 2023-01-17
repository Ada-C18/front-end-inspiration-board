// import CardList from './CardList'
import Dropdown from './Dropdown'
import NewBoardForm from './NewBoardForm'



const Board = () => {
    return (
        <section>
            {/* <CardList></CardList> */}
            <section>
                <label>Choose Board</label>
                <Dropdown></Dropdown>
                <NewBoardForm></NewBoardForm>
                {/* card form */}
                <h2>Board Title</h2>
            </section>
        </section>
    )
}

export default Board;