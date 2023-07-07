import './Accueil.scss'
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Accueil = () => {


    return (
        <div>
            <div className='paragraphName'>
                <h2>Julien Hermain</h2>
                <h1>Développeur JavaScript React</h1>
            </div>
            <Contact />
            <Footer />
        </div>

    )
}

export default Accueil