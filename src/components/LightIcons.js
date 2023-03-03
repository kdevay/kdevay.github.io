import React from "react";
import lin from '../icons/lin.png';
import octocat from '../icons/octocat.png';
import phone from '../icons/phone.png';
import mail from '../icons/mail.png';

export default function HeaderL() {
    return (
        <div class='links'>
            <a target="_blank" href='github'><img className='icon' src={lin} alt='github logo'></img></a>
            <a target="_blank" href='linkedin'><img className='icon' src={octocat} alt='linkedin logo'></img></a>
            <a target="_blank" href='mailto:katdevay@gmail.com'><img className='icon' src={mail} alt='email icon'></img></a>
            <a target="_blank" href='tel:+15046691448'><img className='icon' src={phone} alt='phone icon'></img></a>
        </div>
    );
}