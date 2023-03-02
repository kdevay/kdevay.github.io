import './App.css';
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Header from './components/Header';
import HeaderL from './components/HeaderL';
import Footer from './components/Footer';
import Mid from './components/Mid';


export default function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="App">
        <div id='switch'>
          <button ></button>
          <label className="switch">
            <input onClick={toggleMode} type="checkbox"></input>
            <span className="slider"></span>
          </label>
        </div>
        {mode === 'dark' ? <Header></Header> : <HeaderL></HeaderL>}
        <Mid></Mid>
        <Footer></Footer>
      </div>
      </>
    </ThemeProvider>
  );
}