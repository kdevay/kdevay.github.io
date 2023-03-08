import React from "react";
import prof from "../images/prof.jpeg";
import DarkIcons from './DarkIcons';
import LightIcons from './LightIcons';

export default function About(props) {
    const {mode} = props;

    return(
        <div id='aboutDiv'>
            <div id='aboutText'>
                <p className='aboutHead'>Hi, I'm Kat!</p><br></br>
                <p className='aboutBody'>I'm a web developer from New Orleans.</p>
                <p className='aboutBody'>If you are interested in working together, feel free to reach out!</p>
                {
                    mode === 'dark' ? <DarkIcons></DarkIcons> : <LightIcons></LightIcons>
                }
            </div>
            <div className={'frame' + mode}>
                <img className='profile' src={prof}></img>
            </div>

        </div>
    );
}