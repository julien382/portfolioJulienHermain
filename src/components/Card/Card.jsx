import './Card.scss'
import logo from "../../assets/_edb21061-07ad-4058-a37e-31d41ef7d083.jpg";

const Card = () => {


    return (
        <div className='card'>
            <div className='cardImageContainer'>
                <img className='logoStack' src={logo} alt="logo Stack" />
            </div>
            <div className='cardTextContainer'>
                <h3>Alpaga</h3>
                <p>Création d’un site pour expliquer la différence entre les alpaga et les lama</p>
            </div>
        </div>

    )
}

export default Card