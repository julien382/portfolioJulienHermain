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
        {!showAllCards && (
          <button onClick={handleShowMore}>Voir plus</button>
        )}
        {showAllCards && (
          <button onClick={handleShowLess}>Voir moins</button>
        )}
      </div>
    );
  };
  
  export default Cards;