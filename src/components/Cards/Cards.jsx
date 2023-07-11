import './Cards.scss'
import logo from "../../assets/_edb21061-07ad-4058-a37e-31d41ef7d083.jpg";
import Card from '../Card/Card';
import React, { useState } from 'react';

const Cards = () => {
    const [showAllCards, setShowAllCards] = useState(false);
  
    const cardsData = [
      {
        image: logo,
        title: "Alpaga",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      },
      {
        image: logo,
        title: "P2",
        paragraph: "Création d’un site pour expliquer la différence"
      },
      {
        image: logo,
        title: "P3",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      },
      {
        image: logo,
        title: "P4",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      },
      {
        image: logo,
        title: "P6",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      },
      {
        image: logo,
        title: "P7",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      },
      {
        image: logo,
        title: "P11",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      }
    ];
  
    const visibleCards = showAllCards ? cardsData : cardsData.slice(0, 4);
  
    const handleShowMore = () => {
      setShowAllCards(true);
    };
  
    const handleShowLess = () => {
      setShowAllCards(false);
    };
  
    return (
      <div className='containerCards'>
        <div className="cards">
          {visibleCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </div>
        {!showAllCards ? (
          <div className='arrowContainer' onClick={handleShowMore}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-down-circle arrow' viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
          </div>
        ) : (
          <div className='arrowContainer' onClick={handleShowLess}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-down-circle arrow arrowReturn' viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
          </div>
        )}
      </div>
    );
  };
  
  export default Cards;