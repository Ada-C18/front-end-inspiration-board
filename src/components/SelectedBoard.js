import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css'

const SelectedBoard = (props) => {
    return (
        <div className='selected-board'>
            <h2 className='selected_header'>Selected Board</h2>
                {props.selectedBoard === '' ? (
                    <p>No board selected</p>
                ) : (
                    <p>{props.selectedBoard.title}</p>
                )}
        </div>
    );
};

SelectedBoard.propTypes = {
    selectedBoard: PropTypes.object,
};

export default SelectedBoard;