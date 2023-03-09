import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Header from './components/Header';
import DarkIcons from './components/DarkIcons';
import LightIcons from './components/LightIcons';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';


export default function App() {
  const [mode, setMode] = useState(findInitialPreference());
  const [tab, setTab] = useState('about');

  const changeTab = (id) => {
    console.log('id', id)
    if (id === 'about') setTab('about');
    if (id === 'projects') setTab('projects');
    if (id === 'resume') setTab('resume');
  }

  const toggleMode = () => {
    mode === 'light' ?  setMode('dark') : setMode('light');
  }

  useEffect(()=>{
    let setting = mode === 'light' ? 'light' : 'dark' ;
    localStorage.setItem('storedTheme', setting); // save theme preference 
  }, [mode]);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div id="App">
          <div id='switchDiv'>
            <label className="switch">
              <input onClick={toggleMode} checked={mode === 'dark' ? true : false} type="checkbox"></input>
              <span className="slider"></span>
            </label>
          </div>
        <div id='main'>
          <Header mode={mode} tab={tab} changeTab={changeTab}></Header>
          {  tab === 'about' && <About mode={mode}></About>  }
          {  tab === 'projects' && <Projects mode={mode}></Projects> }
          {  tab === 'resume' && <Resume mode={mode}></Resume> }
          { tab !=='about' ? (mode === 'dark' ? <DarkIcons></DarkIcons> : <LightIcons></LightIcons> ) : null}
        </div>
      </div>
      </>
    </ThemeProvider>
  );
}

function findInitialPreference(){
  // check local storage for pref if visited before
  const storedTheme = localStorage.getItem('storedTheme');
  if (storedTheme){
    return storedTheme;
  }
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
}