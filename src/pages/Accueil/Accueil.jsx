import './Accueil.scss'
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AllStack from '../../components/AllStack/AllStack';

const Accueil = () => {


    return (
        <div className='accueil'>
            <div className='paragraphName'>
                <h2>Julien Hermain</h2>
                <h1>Développeur JavaScript React</h1>
            </div>
            <AllStack />
            <Contact />
            <Footer />
        </div>

    )
}

export default Accueil