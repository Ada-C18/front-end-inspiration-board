import { useLoaderData, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SelectedBoard.css';
import CardView from './CardView.js'


const SelectedBoard = (props) => {

  // const loaderData = useLoaderData();
  // const { loginState, getCards } = loaderData[0];

  // const boardId = useLocation().pathname.split("/").pop();

  // const cardData = async () => {
  //   const cards = await getCards(boardId);
  //   return cards;
  // };

  const cards = props.cards;

  // console.log(cards);

  const getCardViewComponentList = (cards) => {
    return cards.map( (card) => {
      return (
        <li key={card.id}> 
          <CardView
            id={card.id}
            message={card.message}
            likes={card.likes}
            shadowClass = {card.id % 2 === 1 ? "pink-shadow" : "teal-shadow"}          />
        </li>
      )
    })
  };


  return (
    <div> 
      <div id='sort-div'>
        <select id='sort-dropdown'>
          <option value='sort by number of likes'>Sort by: Number of likes</option>
          <option value='sort alphabetically'>Sort: Alphabetically</option>
          <option value='sort by id'>Sort by: ID</option>
        </select>
      </div>
      <ul id='board-flex-container'> {getCardViewComponentList(cards)} </ul>
    </div>
  )
};

export default SelectedBoard;

