import './Card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ link, image, title, paragraph }) => {
    const handleRedirect = (e) => {
        e.preventDefault(); // Empêche toute tentative de navigation interne
        window.open(link, "_blank", "noopener,noreferrer"); // Ouvre dans un nouvel onglet
      };

    return (
        <div className='card' onClick={handleRedirect}>
            <Link to={link}>
                <div className='cardImageContainer'>
                    <img className='logoStack' src={image} alt={title} />
                </div>
                <div className='cardTextContainer'>
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                </div>
            </Link>
        </div>
    );
};

// Définir les PropTypes pour valider les props
Card.propTypes = {
    link: PropTypes.string.isRequired,       // Le lien doit être une chaîne de caractères obligatoire
    image: PropTypes.string.isRequired,      // L'image doit être une chaîne de caractères obligatoire
    title: PropTypes.string.isRequired,      // Le titre doit être une chaîne de caractères obligatoire
    paragraph: PropTypes.string.isRequired,  // Le paragraphe doit être une chaîne de caractères obligatoire
};

export default Card;
