import React from 'react';
import PropTypes from 'prop-types';
import NewBoardForm from './NewBoardForm';

const Board = (props) => {
    const boardComponents = props.entries.map((board, index) => {
        return (
            <li>
                <NewBoardForm
                    id={board.id}
                    title={board.title}
                    owner={board.owner}
                ></NewBoardForm>
            </li>
        );
    })

    return (
        <section>
            <h2>Board List</h2>
            <ul>
                {boardComponents}
            </ul>
        </section>
    );
};

Board.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        board: PropTypes.string.isRequired,
    })),
    onBoardSelect: PropTypes.func.isRequired
};

export default Board;