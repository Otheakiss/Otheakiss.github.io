import './contactIndex.scss';
import Loaders from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import { useEffect, useState } from 'react';
import BrittanyThinking from '../../assets/images/BrittanyThinking.jpg';

const Contact = () => {
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
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    If you have any questions or would just like to chat, don't hestiate to contact me on LinkedIn.                    
                </p>
             
            </div>
            <div className='contact-picture'>
                <img src={BrittanyThinking} alt="Brittany-thinking"></img>
            </div>
        </div>
        <Loaders type='pacman'/>
        </>
    )
}


export default Contact