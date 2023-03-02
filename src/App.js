import './App.css';
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Header from './components/Header';
import Footer from './components/Footer';
import Mid from './components/Mid';


export default function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="App">
        <div></div>
        <Header mode={mode}></Header>
        <Mid></Mid>
        <Footer></Footer>
      </div>
      </>
    </ThemeProvider>
  );
}