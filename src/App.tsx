import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
// Components
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [mode, setMode] = useState(findInitialPreference());
  const [tab, setTab] = useState('ABOUT');

  const changeTab = id => {
    if (id === 'ABOUT') setTab('ABOUT');
    if (id === 'PROJECTS') setTab('PROJECTS');
    if (id === 'RESUME') setTab('RESUME');
  };

  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    let setting = mode === 'light' ? 'light' : 'dark';
    localStorage.setItem('storedTheme', setting); // save theme preference
  }, [mode]);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div id='App' className='overflow-hidden'>
          {/* App */}
          <div id='switchDiv' className='float-right mt-[10px] mr-[10px]'>
            <label className='switch'>
              <input
                onClick={toggleMode}
                checked={mode === 'dark' ? true : false}
                type='checkbox'
              ></input>
              <span className='slider'></span>
            </label>
          </div>
          <div className='relative min-h-screen min-w-screen m-0 grid grid-cols-1 grid-rows-main items-start justify-center gap-[50px]'>
            <Header mode={mode} tab={tab} changeTab={changeTab} />
            {tab === 'ABOUT' && <About mode={mode} />}
            {tab === 'PROJECTS' && <Projects mode={mode} />}
            {tab === 'RESUME' && <Resume />}
            <Footer mode={mode} tab={tab} />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

function findInitialPreference() {
  // Check local storage for pref if visited before
  const storedTheme = localStorage.getItem('storedTheme');
  if (storedTheme) {
    return storedTheme;
  }

  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)',
  ).matches;
  return prefersLight ? 'light' : 'dark';
}
