import './sidebarIndex.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoW from '../../assets/images/LogoW.png';
import LogoSubtitle from '../../assets/images/LogoSubtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    
    return (
        <>
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoW} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Weaver" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" >
                <FontAwesomeIcon icon={faSuitcase} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
            <a href='https://www.linkedin.com/in/brittanyweaver13' target="_blank" rel='noreferrer' className="linkedin-link">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/Otheakiss' target="_blank" rel='noreferrer' className="github-link">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </nav>
    </div>
    </>
    )
}

export default Sidebar