import React, { useState } from 'react';
import './AllStack.scss';
import sass from "../../assets/stack/sass.png";
import html from "../../assets/stack/html.png";
import css from "../../assets/stack/css.png";
import js from "../../assets/stack/js.png";
import react from "../../assets/stack/react.png";
import viteJS from "../../assets/stack/viteJS.png";
import figma from "../../assets/stack/figma.png";
import nodeJS from "../../assets/stack/nodeJS.png";
import redux from "../../assets/stack/redux.png";
import github from "../../assets/stack/github.png";
import git from "../../assets/stack/git.png";
import npm from "../../assets/stack/npm.png";
import cPlusPlus from "../../assets/stack/cPlusPlus.png";
import csharp from "../../assets/stack/cSharp.png";
import python from "../../assets/stack/python.png";

const Contact = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const imagesData = [
    js,
    react,
    viteJS,
    html,
    css,
    sass,
    nodeJS,
    redux,
    figma,
    github,
    npm,
    git,
    python,
    cPlusPlus,
    csharp,
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
                    <div className='logoStackContainer'>
                        <img className='logoStack' key={index} src={image} alt="Image" />
                    </div>
                ))}
            </div>
            {!showAllImages ? (
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

export default Contact;
