import Board from "./Board";
import "../styles/BoardList.css";
import PropTypes from "prop-types";

const BoardList = ({ boardList, getOneBoard}) => { 
    const boardComponents = boardList.map((board) => {
    return (
        <div key={board.id}>
            <Board
                id={board.id}
                title={board.title}
                owner={board.owner}
                getOneBoard ={getOneBoard}
            />
        </div>
    );
});

return (
    <div>
        {boardComponents}
    </div>);
};

BoardList.propTypes = {
    boardList: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    }),
),
    getOneBoard: PropTypes.func.isRequired
};

export default BoardList;
