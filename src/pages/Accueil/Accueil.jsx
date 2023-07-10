import './Accueil.scss'
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AllStack from '../../components/AllStack/AllStack';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';

const Accueil = () => {


    return (
        <div className='app'>
            <div className='accueil'>
                <Header />
                <div className='paragraphName'>
                    <h2>Julien Hermain</h2>
                    <h1>Développeur JavaScript React</h1>
                </div>
                <AllStack />
                <Cards />
                <Contact />
                <Footer />
            </div>
        </div>

    )
}

export default Accueil