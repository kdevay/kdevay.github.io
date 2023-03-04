import React from "react";
import dLin from '../icons/dLin.png';
import dOctocat from '../icons/dOctocat.png';
import dMail from '../icons/dMail.png';
import dPhone from '../icons/dPhone.png';

export default function DarkIcons() {
    return (
        <div id='footer'>
            <a target="_blank" href='https://www.linkedin.com/in/kat-devay/'><img className='icon' src={dLin} alt='linkedin logo'></img></a>
            <a target="_blank" href='https://github.com/kdevay'><img className='icon' src={dOctocat} alt='github logo'></img></a>
            <a target="_blank" href='mailto:katdevay@gmail.com'><img className='icon' src={dMail} alt='email icon'></img></a>
            <a target="_blank" href='tel:+15046691448'><img className='icon' src={dPhone} alt='phone icon'></img></a>
        </div>
    );
}