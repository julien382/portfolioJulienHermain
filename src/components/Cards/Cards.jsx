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
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none" className='arrow'>
                <path d="M25.1025 2C12.348 2 2 12.348 2 25.1025C2 37.8571 12.348 48.2051 25.1025 48.2051C37.8571 48.2051 48.2051 37.8571 48.2051 25.1025C48.2051 12.348 37.8571 2 25.1025 2Z" stroke="black" stroke-width="3.85042" stroke-miterlimit="10"/>
                <path d="M36.6538 20.2895L25.1025 31.8408L13.5513 20.2895" stroke="black" stroke-width="3.85042" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        ) : (
          <div className='arrowContainer' onClick={handleShowLess}>
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none" className='arrow arrowReturn'>
                <path d="M25.1025 2C12.348 2 2 12.348 2 25.1025C2 37.8571 12.348 48.2051 25.1025 48.2051C37.8571 48.2051 48.2051 37.8571 48.2051 25.1025C48.2051 12.348 37.8571 2 25.1025 2Z" stroke="black" stroke-width="3.85042" stroke-miterlimit="10"/>
                <path d="M36.6538 20.2895L25.1025 31.8408L13.5513 20.2895" stroke="black" stroke-width="3.85042" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        )}
      </div>
    );
  };
  
  export default Cards;

  