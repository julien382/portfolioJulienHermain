import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Contact = () => {


    return (
        <div className='contactContainer'>
            <div>
                <div className='contactTop'>
                    <h4>Contact</h4>
                </div>
                <div className='contactBottom'>
                    <Link to="https://github.com/julien382">
                        <FontAwesomeIcon icon={faGithub} className='linkContact'/>
                    </Link>
                    <Link to="mailto:julhermain@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className='linkContact'/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/julien-hermain/">
                        <FontAwesomeIcon icon={faLinkedin} className='linkContact'/>
                    </Link>

                </div>

            </div>
        </div>

    )
}

export default Contact