import './AllStack.scss'
import logo from "../../assets/_edb21061-07ad-4058-a37e-31d41ef7d083.jpg";
import React, { useState } from 'react';

const Contact = () => {

    const [showAllImages, setShowAllImages] = useState(false);

    const imagesData = [
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo,
        logo
    ];

    const visibleImages = showAllImages ? imagesData : imagesData.slice(0, 6);

    const handleShowMore = () => {
        setShowAllImages(true);
    };

    const handleShowLess = () => {
        setShowAllImages(false);
    };

    return (
        <div className='allStackContainer'>
            <div className="allStack">
                {visibleImages.map((image, index) => (
                <img className='logoStack' key={index} src={image} alt="Image" />
                ))}
            </div>
            {!showAllImages && (
                <button onClick={handleShowMore}>
                <p>V</p>
                </button>
            )}
            {showAllImages && (
                <button onClick={handleShowLess}>
                <p>V</p>
                </button>
            )}
        </div>
  )
}


export default Contact