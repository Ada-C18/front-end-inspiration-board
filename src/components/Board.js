import axios from 'axios';
import React, { useEffect, useState } from "react";
import CardList from './CardList';
import Dropdown from './Dropdown';
import NewBoardForm from './NewBoardForm';
import NewCardForm from './NewCardForm';
import './Board.css';


const Board = () => {
    const [boardData, setBoardData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(0);
    const [selectedBoardTitle, setSelectedBoardTitle] = useState('');

    const onBoardSubmit = (newBoardData) => {
        axios
        .post("https://rykaliva.herokuapp.com/boards", newBoardData)
        .then(() => {
        axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
            setBoardData(response.data);
        }, []);
        })
        .catch((error) => {
        console.log(error);
    });
    };

    const getBoardId = (id) => {
    setSelectedBoard(id);
    axios.get(`https://rykaliva.herokuapp.com/boards/${id}/cards`).then((response) => {
        setCardData(response.data)
    })
    }
    
    useEffect(() => {
        axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
            setBoardData(response.data);
        });
    }, []);
    
    const getBoardTitle = (title) => {
        setSelectedBoardTitle(title);
    }
    
    const addCardCallback = (newCardData) => {
        let board_id = selectedBoard;
        axios.post(`https://rykaliva.herokuapp.com/boards/${board_id}/cards`, newCardData)
        .then(() => {
        axios.get (`https://rykaliva.herokuapp.com/boards/${board_id}/cards`).then((response)=> {
            setCardData(response.data)
            });
        }) 
        .catch(error => {
            console.log(error)
        });
    };

    const updateCard = (id) => {
        setCardData(prevCards => {
        const newCards = prevCards.map((card) => {
            if (card.card_id === id) {
                return {...card, likes_count: card.likes_count+1}
            } else {
                return card;
            }
        })
        return newCards;
        });
        console.log(cardData);
        for (let card of cardData) {
            if (card.card_id === id) {
                axios.put(`https://rykaliva.herokuapp.com/cards/${id}`, {likes_count: `${card.likes_count}`})
            }
        }
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
            <CardList cardData={cardData} updateCard={updateCard}></CardList>
        </section>
    );
};

export default Board;