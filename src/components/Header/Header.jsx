import React from 'react';
import './Header.scss';
import pdfFile from '../../data/CV_JULIEN_HERMAIN_2023_Openclassrooms.pdf';

const Header = () => {
  const openPdf = () => {
    window.open(pdfFile);
  };

  return (
    <header className="headerContainer">
      <button className='buttonHeader' onClick={openPdf}>
        CV
      </button>
    </header>
  );
};

export default Header;
