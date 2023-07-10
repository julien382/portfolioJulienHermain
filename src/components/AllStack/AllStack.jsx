import './AllStack.scss'
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

import React, { useState } from 'react';

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