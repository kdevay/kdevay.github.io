import React from "react";
import dLin from '../icons/dLin.png';
import dOctocat from '../icons/dOctocat.png';
import dMail from '../icons/dMail.png';
import dPhone from '../icons/dPhone.png';

export default function Header() {
    return (
        <div id="header">
            <h1>Katherine Mireille de Vay</h1>
            <h3>Full-stack Developer • she / they</h3>
            <div class='links'>
                <a target="_blank" href='github'><img className='icon' src={dLin} alt='github logo'></img></a>
                <a target="_blank" href='linkedin'><img className='icon' src={dOctocat} alt='linkedin logo'></img></a>
                <a target="_blank" href='mailto:katdevay@gmail.com'><img className='icon' src={dMail} alt='email icon'></img></a>
                <div><img className='icon' src={dPhone} alt='phone icon'></img></div>
            </div>
        </div>
    );
}