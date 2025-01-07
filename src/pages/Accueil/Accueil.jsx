import './Accueil.scss'
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AllStack from '../../components/AllStack/AllStack';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

const Accueil = () => {


    return (
        <div className='app'>
            <div className='accueil'>
                <Header />
                <Title />
                <AllStack />
                <Cards />
                <Contact />
                <Footer />
            </div>
        </div>

    )
}

export default Accueil