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
    const [cardData, setCardData] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(0);

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
    
    const getBoardId = (id) => {
        // create hook to find which board is being selected
        // trigger board
        setSelectedBoard(id)
        console.log(`board id ${id}`)
    }
    
    const addCardCallback = (newCardData) => {
        let board_id = getBoardId();
        axios.post(`https://rykaliva.herokuapp.com/boards/${board_id}/cards`, newCardData)
        .then((response) => {
            const newCards = [...cardData];
            newCards.push({
                card_id: response.data.card_id,
                message: response.data.message,
                likes_count: response.data.likes_count,
                ...cardData
        });
            setCardData(newCards);
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
                <Dropdown boardData={boardData} getBoardId={getBoardId}></Dropdown>
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