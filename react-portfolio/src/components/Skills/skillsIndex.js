import AnimatedLetters from '../AnimatedLetters/animatedLettersIndex';
import './skillsIndex.scss';
import React, { useEffect, useState } from 'react';
import Sparkles from 'react-sparkle';
import resume from '../../assets/images/BrittanyWeaverResume.pdf';
import Loader from 'react-loaders';

const Skills = () => {
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
            <div className='container skills-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15} />
                    </h1>
                    <p> HTML<br />
                        CSS<br />
                        SASS<br />
                        JavaScript<br />
                        React<br />
                        Vue<br />
                        Java<br />
                        IntelliJ<br />
                        Unit Testing<br />
                        GIT<br />
                        GITHUB<br />
                        Spring Boot<br />
                        PostgreSQL<br />
                        Responsive Design<br />
                        E/R Diagrams<br />
                        Integration Testing<br />
                    </p>
                    <div onTouchStart="">
                        <div className="button">
                            <a href={resume} 
                            rel="noreferrer"
                            target='_blank'>
                                View My Resume
                            </a>
                </div>
                </div>
                <Sparkles
                            color="random"
                            count={50}
                            minSize={7}
                            maxSize={10}
                            overflowPx={0}
                            fadeOutSpeed={10}
                            flicker={true}
                            newSparkleOnFadeOut={true}
                            flickerSpeed={'slowest'}
                        />
                
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Skills