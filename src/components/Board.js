import axios from 'axios';
import React, { useEffect, useState } from "react";

// import CardList from './CardList'
import Dropdown from './Dropdown'
import NewBoardForm from './NewBoardForm'
import NewCardForm from './NewCardForm'
import './Board.css'
import Card from './Card'




const Board = () => {
    const [boardData, setBoardData] = useState([]);

    const onBoardSubmit = (newBoardData) => {
    axios
        .post("https://rykaliva.herokuapp.com/boards", newBoardData)
        .then(() => {
        axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
            setBoardData(response.data);
        });
        })
        .catch((error) => {
        console.log(error);
        });
    };

    useEffect(() => {
        axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
        setBoardData(response.data);
        });
    }, []);


    const addCardCallback = (newCardData) => {
        
        axios.post('https://rykaliva.herokuapp.com/boards/{board_id}/cards', newCardData)
        .then((response) => {
            console.log('response:', response);
            console.log('response data:', response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <section className="board-container">
        <section className="input-section">
            <div className='user-choice'>
                <label>Choose Board to Display</label>
                <Dropdown boardData={boardData}></Dropdown>
                <label>Create a Board</label>
                <NewBoardForm onBoardSubmit={onBoardSubmit}></NewBoardForm>
                <label>Create a Card</label>
                <NewCardForm addCardCallback={addCardCallback}></NewCardForm>
            </div>
            <div className='board-title'>
                {/* i think we need to call a function in this h2 to change the present title as its chosen */}
                <h2>Board Title</h2>
            </div>
        </section>
        <div className="card1">
            <Card></Card>
        </div>
        <div className="card2">
            <Card></Card>
        </div>
        <div className="card3">
            <Card></Card>
        </div>
        <div className="card4">
            <Card></Card>
        </div>
        <div className="card5">
            <Card></Card>
        </div>
        <div className="card6">
            <Card></Card>
        </div>
        <div className="card7">
            <Card></Card>
        </div>
        <div className="card8">
            <Card></Card>
        </div>
        </section>
    );
};

export default Board;