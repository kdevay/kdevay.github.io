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
                <p className='aboutBody'>I'm a full stack developer, looking to join a team of passionate professionals.</p><br></br>
                <p className='aboutBody'>Let's work together!</p><br></br>
                {
                    mode === 'dark' ? <DarkIcons></DarkIcons> : <LightIcons></LightIcons>
                }
            </div>
            <div className={'frame' + mode}>
                <img className='profile' src={prof} alt='Kat devay in front of a blank wall'></img>
            </div>

        </div>
    );
}