import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Header from './components/Header';
import DarkIcons from './components/DarkIcons';
import LightIcons from './components/LightIcons';
import Resume from './components/Resume';
import Projects from './components/Projects';


export default function App() {
  const [mode, setMode] = useState('dark');
  const [tab, setTab] = useState('resume');

  const changeTab = (id) => {
    console.log('id', id)
    id === 'projects' ? setTab('projects') : setTab('resume');
  }

  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div id="App">
          <div id='switchDiv'>
            <label className="switch">
              <input onClick={toggleMode} type="checkbox"></input>
              <span className="slider"></span>
            </label>
          </div>
        <div id='main'>
          <Header mode={mode} tab={tab} changeTab={changeTab}></Header>
          {tab === 'projects' ? <Projects mode={mode}></Projects> : <Resume></Resume>}
          {mode === 'dark' ? <DarkIcons></DarkIcons> : <LightIcons></LightIcons>}
        </div>
      </div>
      </>
    </ThemeProvider>
  );
}