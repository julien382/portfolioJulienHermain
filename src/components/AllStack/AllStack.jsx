import { useState } from 'react';
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
import inkscape from "../../assets/stack/inkscape.png";
import python from "../../assets/stack/python.png";

import { useMediaQuery } from 'react-responsive';


const Contact = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const imagesData = [
    { src: react, name: "React" },
    { src: js, name: "JavaScript" },
    { src: viteJS, name: "ViteJS" },
    { src: sass, name: "Sass" },
    { src: figma, name: "Figma" },
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
    { src: nodeJS, name: "NodeJS" },
    { src: redux, name: "Redux" },
    { src: github, name: "GitHub" },
    { src: npm, name: "NPM" },
    { src: git, name: "Git" },
    { src: python, name: "Python" },
    { src: cPlusPlus, name: "C++" },
    { src: inkscape, name: "Inkscape" }
  ];

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const visibleImages = showAllImages
    ? imagesData
    : imagesData.slice(0, isDesktop ? 10 : 6);

  const handleShowMore = () => {
    setShowAllImages(true);
  };

  const handleShowLess = () => {
    setShowAllImages(false);
  };

    return (
        <div className='allStacks'>
            <div className='allStackContainer'>
                <div className="allStack">
                    {visibleImages.map((image, index) => (
                        <div className="logoStackContainer" key={index}>
                            <img className="logoStack" src={image.src} alt={image.name} />
                            <span className="logoName">{image.name}</span>
                        </div>
                    ))}
                </div>
                {!showAllImages ? (
                    <div className='arrowContainer' onClick={handleShowMore}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none" className='arrow'>
                            <path d="M10.0387 15.058L20.0773 25.0967L30.116 15.058" stroke="black" strokeWidth="3.34622" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                ) : (
                    <div className='arrowContainer' onClick={handleShowLess}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none" className='arrow arrowReturn'>
                            <path d="M10.0387 15.058L20.0773 25.0967L30.116 15.058" stroke="black" strokeWidth="3.34622" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                )}
                </div>

        </div>
    );
};

export default Contact;
