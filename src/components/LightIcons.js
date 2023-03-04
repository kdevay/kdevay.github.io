import React from "react";
import lin from '../icons/lin.png';
import octocat from '../icons/octocat.png';
import phone from '../icons/phone.png';
import mail from '../icons/mail.png';

export default function HeaderL() {
    return (
        <div id='footer'>
            <a target="_blank" href='https://www.linkedin.com/in/kat-devay/'><img className='icon' src={lin} alt='linkedin logo'></img></a>
            <a target="_blank" href='https://github.com/kdevay'><img className='icon' src={octocat} alt='github logo'></img></a>
            <a target="_blank" href='mailto:katdevay@gmail.com'><img className='icon' src={mail} alt='email icon'></img></a>
            <a target="_blank" href='tel:+15046691448'><img className='icon' src={phone} alt='phone icon'></img></a>
        </div>
    );
}