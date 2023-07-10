import './Header.scss'

const Header = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../data/CV_JULIEN_HERMAIN_2023_Openclassrooms.pdf';
        link.download = 'CV_Julien_Hermain.pdf';
        link.click();
    };
 
    return (
        <header className="headerContainer">
            <button className='buttonHeader' onClick={handleDownload}>
            CV
            </button>
        </header>
    );
};

export default Header;