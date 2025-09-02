import React, { useState, useEffect } from 'react';

export default function Header(props) {
  const { changeTab, tab, mode } = props;
  // State selector
  const [isASelected, setIsASelected] = useState(
    tab === 'about' ? 'selected' : '',
  );
  const [isPSelected, setIsPSelected] = useState(
    tab === 'projects' ? 'selected' : '',
  );
  const [isRSelected, setIsRSelected] = useState(
    tab === 'resume' ? 'selected' : '',
  );
  // State color
  const [tabMode, setTabMode] = useState(mode === 'dark' ? 'D' : 'L');

  useEffect(() => {
    setIsASelected(tab === 'about' ? 'selected' : '');
    setIsPSelected(tab === 'projects' ? 'selected' : '');
    setIsRSelected(tab === 'resume' ? 'selected' : '');
  }, [tab]);

  useEffect(() => {
    setTabMode(mode === 'dark' ? 'D' : 'L');
  }, [mode]);

  const change = e => {
    changeTab(e.target.id);
  };

  return (
    <div id='header'>
      <div className='nameDiv'>
        <h1 className='name'>KAT &nbsp; DE</h1> &nbsp;
        <h1 className='bigV'> V</h1>
        <h1 className='name'>AY</h1>
      </div>

      <h2 id='title'>FULL STACK WEB DEVELOPER</h2>

      <div id='tabs'>
        <div>
          <div
            onClick={change}
            className={`tab ${tabMode + isASelected}`}
            id='about'
          >
            ABOUT
          </div>
          {isASelected ? <hr></hr> : null}
        </div>
        <div>
          <div
            onClick={change}
            className={`tab ${tabMode + isPSelected}`}
            id='projects'
          >
            PROJECTS
          </div>
          {isPSelected ? <hr></hr> : null}
        </div>
        <div>
          <div
            onClick={change}
            className={`tab ${tabMode + isRSelected}`}
            id='resume'
          >
            RESUME
          </div>
          {isRSelected ? <hr className='rLine'></hr> : null}
        </div>
      </div>
    </div>
  );
}
