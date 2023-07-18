import './Cards.scss'
import alpaga from "../../assets/card/alpaga.png";
import booki from "../../assets/card/booki.png";
import ohmyfood from "../../assets/card/ohmyfood.png";
import gameon from "../../assets/card/gameon.png";
import fisheye from "../../assets/card/fisheye.png";
import lespetitsplats from "../../assets/card/lespetitsplats.png";
import kasa from "../../assets/card/kasa.png";
import Card from '../Card/Card';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Cards = () => {
    const [showAllCards, setShowAllCards] = useState(false);
  
    const cardsData = [
      {
        link: "https://julien382.github.io/Alpaga/",
        image: alpaga,
        title: "Alpaga",
        paragraph: "Création d’un site pour expliquer la différence entre les alpaga et les lama"
      },
      {
        link: "https://julien382.github.io/P2_Booki/",
        image: booki,
        title: "Booki",
        paragraph: "Transformer une maquette en site web avec HTML et CSS"
      },
      {
        link: "https://julien382.github.io/JulienHermain_3_28-02-2022/",
        image: ohmyfood,
        title: "ohmyfood",
        paragraph: "Dynamiser une page web avec des animations CSS"
      },
      {
        link: "https://julien382.github.io/JulienHermain_P4_06_04_22_GameOn-website-FR/",
        image: gameon,
        title: "GameOn",
        paragraph: "Créer une landing page avec Javascript"
      },
      {
        link: "https://julien382.github.io/JulienHermain_P6_07-05-2022/",
        image: fisheye,
        title: "FishEye",
        paragraph: "Créer un site accessible pour une plateforme de photographes"
      },
      {
        link: "https://julien382.github.io/JulienHermain_P7_16-06-2022/",
        image: lespetitsplats,
        title: "Les petits plats",
        paragraph: "Développer un algorithme de recherche en Javascript"
      },
      {
        link: "https://julien382.github.io/JulienHermain_P11_05-12-2022/",
        image: kasa,
        title: "Kasa",
        paragraph: "Développer une application avec React et React Router"
      }
    ];

    const isDesktop = useMediaQuery({ minWidth: 768 }); // Détection du mode bureau (ajustez la valeur minWidth selon vos besoins)

    const visibleCards = showAllCards || isDesktop ? cardsData : cardsData.slice(0, 4);
  
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
              link={card.link}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
            />
          ))}
        </div>
        {!showAllCards ? (
          <div className='arrowContainer' onClick={handleShowMore}>
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none" className='arrowCard'>
                <path d="M25.1025 2C12.348 2 2 12.348 2 25.1025C2 37.8571 12.348 48.2051 25.1025 48.2051C37.8571 48.2051 48.2051 37.8571 48.2051 25.1025C48.2051 12.348 37.8571 2 25.1025 2Z" stroke="black" stroke-width="3.85042" stroke-miterlimit="10"/>
                <path d="M36.6538 20.2895L25.1025 31.8408L13.5513 20.2895" stroke="black" stroke-width="3.85042" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        ) : (
          <div className='arrowContainer' onClick={handleShowLess}>
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none" className='arrowCard arrowCardReturn'>
                <path d="M25.1025 2C12.348 2 2 12.348 2 25.1025C2 37.8571 12.348 48.2051 25.1025 48.2051C37.8571 48.2051 48.2051 37.8571 48.2051 25.1025C48.2051 12.348 37.8571 2 25.1025 2Z" stroke="black" stroke-width="3.85042" stroke-miterlimit="10"/>
                <path d="M36.6538 20.2895L25.1025 31.8408L13.5513 20.2895" stroke="black" stroke-width="3.85042" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        )}
      </div>
    );
  };
  
  export default Cards;

  