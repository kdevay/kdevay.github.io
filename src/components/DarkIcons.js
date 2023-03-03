import React from "react";
import dLin from '../icons/dLin.png';
import dOctocat from '../icons/dOctocat.png';
import dMail from '../icons/dMail.png';
import dPhone from '../icons/dPhone.png';

export default function DarkIcons() {
    return (
        <div class='links'>
            <a target="_blank" href='github'><img className='icon' src={dLin} alt='github logo'></img></a>
            <a target="_blank" href='linkedin'><img className='icon' src={dOctocat} alt='linkedin logo'></img></a>
            <a target="_blank" href='mailto:katdevay@gmail.com'><img className='icon' src={dMail} alt='email icon'></img></a>
            <a target="_blank" href='tel:+15046691448'><img className='icon' src={dPhone} alt='phone icon'></img></a>
        </div>
    );
}