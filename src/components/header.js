import React, { useState, useEffect } from "react";

export default function Header(props) {
    const {changeTab, tab, mode} = props;

    const [isSelectedP, setIsSelectedP] = useState(tab === 'projects' ? 'selected' : '');
    const [isSelectedR, setIsSelectedR] = useState(tab === 'resume' ? 'selected' : '');

    const [modePR, setModePR] = useState(mode === 'dark' ? 'D' : 'L');

    useEffect(() => {
        setIsSelectedP(tab === 'projects' ? 'selected' : '');
        setIsSelectedR(tab === 'resume' ? 'selected' : '');
    }, [tab]); 

    useEffect(() => {
        setModePR(mode === 'dark' ? 'D' : 'L');
    }, [mode]); 


    const change = (e) => {
        console.log('clicked')
        changeTab(e.target.id);
    }


    return (
        <div id="header"> 
            <div className="nameDiv"> 
                <h1 className="name">KAT &nbsp; DE</h1> &nbsp;<h1 className="bigV"> V</h1><h1 className="name">AY</h1> 
            </div>

            <h2 id='title'>FULL STACK WEB DEVELOPER</h2>
            
            <div id="tabs">
                <div>
                    <div onClick={change} className={'tab' + ' ' + modePR + isSelectedP} id='projects'>PROJECTS</div>
                    {isSelectedP ? <hr></hr> : null}
                </div>
                <div>
                    <div onClick={change} className={'tab' + ' ' + modePR + isSelectedR} id='resume'>RESUME</div>
                    {isSelectedR ? <hr className='rLine'></hr> : null}
                </div>
            </div>
        </div>
        
    );
}