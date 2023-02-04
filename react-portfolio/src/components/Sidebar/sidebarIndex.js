import './sidebarIndex.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoW from '../../assets/images/LogoW.png';
import LogoSubtitle from '../../assets/images/LogoSubtitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoW} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Weaver" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faPenFancy} />
            </NavLink>
            <a href='https://www.linkedin.com/in/brittanyweaver13' target="_blank" rel='noreferrer' className="linkedin-link">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/Otheakiss' target="_blank" rel='noreferrer' className="github-link">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </nav>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#e25b45"
          size="3x"
          className='hamburger-icon' />
    </div>
    </>
    )
}

export default Sidebar