import './projectsIndex.scss';
import Loaders from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import { useEffect, useState } from 'react';
import tastebuds from '../../assets/images/tastebuds.png'

const Projects = () => {
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
        <div className='container project-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', ' ', '#', '1']}
                idx={15} />
            </h1>
            <h3>tastebuds</h3>
            <p>Designed to find the perfect place to dine. Restaurant matching and voting application using MVC pattern and RESTful APIs. 
                Registered Taste Buds users can search for restaurants in a desired area and create scheduled events. 
                Friends are invited via unique links to view restaurant information and submit votes. The program will record votes and calculate the winning restaurants.
            </p>
            </div>
        </div>
        <div className='container projects-picture'>
            <img src={tastebuds} alt='tastebuds' className=''></img>
            
        </div>
        <Loaders type='pacman' />
        </>
    )
}
export default Projects