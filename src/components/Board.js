import axios from 'axios';
import React, { useEffect, useState } from "react";
import CardList from './CardList'
import Dropdown from './Dropdown'
import NewBoardForm from './NewBoardForm'
import NewCardForm from './NewCardForm'
import './Board.css'


const Board = () => {
    const [boardData, setBoardData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(0);
    const [selectedBoardTitle, setSelectedBoardTitle] = useState('');

    const onBoardSubmit = (newBoardData) => {
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoardData)
        .then(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`).then((response) => {
            setBoardData(response.data);
        }, []);
        })
        .catch((error) => {
        console.log(error);
    });
    };

    const getBoardId = (id) => {
    setSelectedBoard(id);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`).then((response) => {
        setCardData(response.data)
    })
}
    const getBoardTitle = (title) => {
        setSelectedBoardTitle(title);
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`).then((response) => {
            setBoardData(response.data);
        });
    }, []);
    
    
    const addCardCallback = (newCardData) => {
        let board_id = selectedBoard;
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`, newCardData)
        .then(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`).then((response)=> {
            setCardData(response.data)
            });
        }) 
        .catch(error => {
            console.log(error)
        });
    };

    const updateCard = (id) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
        .then(() => {
            // console.log(response)
            const newCards = cardData.map((card) => {
                if (card.card_id === id) {
                    return {...card, likes_count: card.likes_count+1}
                } else {
                    return card;
                }
        })
        setCardData(newCards)
        });
    };

    const deleteCard = (id) => {
        for (let card of cardData) {
            if (card.card_id === id) {
                axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${id}`)
                .then(() => {
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard}/cards`).then((response) => {
                    setCardData(response.data)
                });
                })
            }
        };
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
            <CardList 
            cardData={cardData} 
            updateCard={updateCard}
            deleteCard={deleteCard}
            ></CardList>
        </section>
    );
};

export default Board;