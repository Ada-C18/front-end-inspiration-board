import axios from 'axios';
import React, { useEffect, useState } from "react";

import CardList from './CardList'
import Dropdown from './Dropdown'
import NewBoardForm from './NewBoardForm'
import NewCardForm from './NewCardForm'
import './Board.css'
import Card from './Card'


const Board = () => {
    const [boardData, setBoardData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(0);
    const [selectedBoardTitle, setselectedBoardTitle] = useState('');

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
        const getBoardId = (id) => {
        setSelectedBoard(id);
            // console.log(`board id ${id}`)
        }
    
    useEffect(() => {
        axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
            setBoardData(response.data);
            axios.get(`https://rykaliva.herokuapp.com/boards/${selectedBoard}/cards`) 
            .then((response) => {
                setCardData(response.data)
            });  
        });
    }, []);
    

    const getBoardTitle = (title) => {
        setselectedBoardTitle(title);
    }
    
    const addCardCallback = (newCardData) => {
        let board_id = selectedBoard;
        axios.post(`https://rykaliva.herokuapp.com/boards/${board_id}/cards`, newCardData)
        .then(() => {
            axios.get (`https://rykaliva.herokuapp.com/boards/${board_id}/cards`) .then((response)=> {
                setCardData(response.data)
            });
        }) 
        // .then((response) => {
            // const newCards = [...cardData];
            // newCards.push({
            //     card_id: response.data.card_id,
            //     message: response.data.message,
            //     likes_count: response.data.likes_count,
            //     ...cardData
        // });
        // setCardData(newCards);
        // console.log(response.data)

        // });
        .catch(error => {
            console.log(error)
        });
    };

    return (
        <section className="board-container">
        <section className="input-section">
            <div className='user-choice'>
                <label>Choose Board to Display</label>
                <Dropdown boardData={boardData} getBoardId={getBoardId} getBoardTitle={getBoardTitle}></Dropdown>
                <label>Create a Board</label>
                <NewBoardForm onBoardSubmit={onBoardSubmit}></NewBoardForm>
                <label>Create a Card</label>
                <NewCardForm addCardCallback={addCardCallback}></NewCardForm>
            </div>
            <div className='board-title'>
                <h2>{selectedBoardTitle}</h2>
            </div>
        </section>
        <CardList cardData={cardData}></CardList>
        {/* <div className="card1">
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
        </div> */}
        </section>
    );
};

export default Board;