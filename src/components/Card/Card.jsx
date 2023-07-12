import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({link, image, title, paragraph}) => {


    return (
        <div className='card'>
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

    )
}

export default Card