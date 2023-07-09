import './Cards.scss'
import logo from "../../assets/_edb21061-07ad-4058-a37e-31d41ef7d083.jpg";
import Card from '../Card/Card';

const Cards = () => {


    return (
        <div className='cards'>
            <Card image={logo} title={"Alpaga"} paragraphe={"Création d’un site pour expliquer la différence entre les alpaga et les lama"}/>
            <Card image={logo} title={"Alpaga"} paragraphe={"Création d’un site pour expliquer la différence entre les alpaga et les lama"}/>
            <Card image={logo} title={"Alpaga"} paragraphe={"Création d’un site pour expliquer la différence entre les alpaga et les lama"}/>
            <Card image={logo} title={"Alpaga"} paragraphe={"Création d’un site pour expliquer la différence entre les alpaga et les lama"}/>
        </div>

    )
}

export default Cards