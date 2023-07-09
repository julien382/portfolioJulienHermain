import './Accueil.scss'
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AllStack from '../../components/AllStack/AllStack';
import Card from '../../components/Card/Card';

const Accueil = () => {


    return (
        <div className='accueil'>
            <div className='paragraphName'>
                <h2>Julien Hermain</h2>
                <h1>Développeur JavaScript React</h1>
            </div>
            <AllStack />
            <Card />
            <Contact />
            <Footer />
        </div>

    )
}

export default Accueil