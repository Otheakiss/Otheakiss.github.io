import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Brittany from '../../assets/images/Brittany.jpg';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import 'animate.css';
import './homeIndex.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I',"'",'m', ' ', 'B','r','i','t','t','a','n','y', ' ', 'W','e','a','v','e','r','!']
    const greetingArray = ['H','e','l','l','o',',']

    useEffect(() => {
        let timeout;
  
        timeout = setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
  
        return () => {
          clearTimeout(timeout);
        };
      }, []);

    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={greetingArray} idx={1} />
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={7} />
                <br />
                </h1>
                <h2>Full-Stack Developer | Knowledge Seeker | Gamer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div> 
        <div>
        <img src={Brittany} alt='Developer' class="animate__animated animate__backInUp"></img>
      </div>  
      <Loader type="pacman" />
      </>   
    );
}

export default Home