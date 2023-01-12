import { useEffect, useState, React } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import Brittanywork from '../../assets/images/Brittanywork.jpg';
import Loader from 'react-loaders';
import './aboutIndex.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
            <p>
              I got into IT because of my older brother, who unfortunately passed away when I was young. 
              I didn't know what I wanted to be at the time, so I decided to follow in his footsteps. Along my journey I discovered that I enjoyed coding. 
              I really enjoyed the problem solving aspect, specifically chasing that feeling you get when you're stuck on something forever and then the solution 
              comes to you and you get that "YES!" feeling and you're on top of the world. 
            <br />
            <br />
            I spent years as the Lead IT person in a small firm, and it taught me a lot of self reliance but it limited my room to grow. 
            I'm incredibly grateful that I got the opportunity to level up with Tech Elevator and really achieve the dream that my brother once strived for.
            <br />
            <br />
            Candidly I am looking for a company that celebrates those "YES!" moments as well as giving me the chance to continue leveling up while improving the world. 
            </p>
        </div>
        <div className='picture'>
          <img src={Brittanywork} alt="Brittany working"></img>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About