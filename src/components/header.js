import React from "react";

export default function Header(props) {
    const {changeTab, tab, mode} = props;

    const change = (e) => {
        changeTab(e);
    }

    return (
        <div id="header"> 

            <div class="nameDiv"> 
                <h1 class="name">KAT &nbsp; DE</h1> &nbsp;<h1 class="bigV"> V</h1><h1 class="name">AY</h1> 
            </div>
            {
                mode === 'light' ?
                <div id="tabs">
                    <div onClick={change} className={tab === 'projects' ? 'Lselected' : 'unSelected'}id='projects'>PROJECTS</div> 
                    <div onClick={change} className={tab === 'resume' ? 'Lselected' : 'unSelected'}id='resume'>RESUME</div> 
                </div>
                :
                <div id="tabs">
                    <div onClick={change} className={tab === 'projects' ? 'Dselected' : 'unSelected'}id='projects'>PROJECTS</div> 
                    <div onClick={change} className={tab === 'resume' ? 'Dselected' : 'unSelected'}id='resume'>RESUME</div> 
                </div>
            }
        </div>
        
    );
}