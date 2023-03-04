import React, { useState, useEffect } from "react";

export default function Header(props) {
    const {changeTab, tab, mode} = props;

    const [isSelectedP, setIsSelectedP] = useState(tab === 'projects' ? 'selected' : 'unSelected');
    const [isSelectedR, setIsSelectedR] = useState(tab === 'resume' ? 'selected' : 'unSelected');

    const [modeP, setModeP] = useState(mode === 'dark' ? 'D' : 'L');
    const [modeR, setModeR] = useState(mode === 'dark' ? 'D' : 'L');


    useEffect(() => {
        setIsSelectedP(tab === 'projects' ? 'selected' : 'unSelected');
        setIsSelectedR(tab === 'resume' ? 'selected' : 'unSelected');
    }, [tab]); 

    useEffect(() => {
        setModeP(mode === 'dark' ? 'D' : 'L');
        setModeR(mode === 'dark' ? 'D' : 'L');
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
                <div onClick={change} className={modeP + isSelectedP} id='projects'>PROJECTS</div> 
                <div onClick={change} className={modeR + isSelectedR} id='resume'>RESUME</div> 
            </div>
        </div>
        
    );
}