import './Card.scss'

const Card = ({image, title, paragraph}) => {


    return (
        <div className='card'>
            <div className='cardImageContainer'>
                <img className='logoStack' src={image} alt="logo Stack" />
            </div>
            <div className='cardTextContainer'>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
        </div>

    )
}

export default Card