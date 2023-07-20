import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css'

const SelectedBoard = (props) => {
    return (
        <div className='selected-board'>
            <h2 className='selected_header'>Selected Board</h2>
                {props.selectedBoard ? (
                    <h3>{props.selectedBoard.title}</h3>
                ) : (
                    <p>{props.selectedBoard}</p>
                )}
        </div>
    );
};

SelectedBoard.propTypes = {
    selectedBoard: PropTypes.object,
};

export default SelectedBoard;