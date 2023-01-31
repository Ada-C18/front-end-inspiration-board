
const Board = (props) => {
    return (
        <div onClick={() => props.onBoardClick(props.board)}>{props.board.title}
        </div>
    );
};

export default Board;