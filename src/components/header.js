import React from "react";
import linkedIn from '../icons/linkedIn.png';
import github from '../icons/github.png';
import phone from '../icons/phone.png';
import mail from '../icons/mail.png';

export default function Header() {
    return (
        <div id="header">
            <h1>Katherine Mireille de Vay</h1>
            {/* 
Full-Stack Developer
she / they  •  New Orleans, La  •  katdevay2@gmail.com  •  linkedin.com/in/kat-devay  •  (504) 669-1448
 */}
            <h3>Full-stack Developer</h3>
            <div class='links'>
                {/* <img src=></img> */}
                <a href='github'></a>
                <a href='linkedin'></a>
                <a href='mailto:katdevay@gmail.com'></a>
                <p>(504) 669-1448</p>
            </div>
        </div>
    );
}