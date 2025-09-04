import { useState } from 'react';
import { useTheme } from './utils/ThemeProvider.js';
// Components
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Toggle from './components/Toggle.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [tab, setTab] = useState('ABOUT');

  const changeTab = id => {
    if (id === 'ABOUT') setTab('ABOUT');
    if (id === 'PROJECTS') setTab('PROJECTS');
    if (id === 'RESUME') setTab('RESUME');
  };

  return (
    <>
      {/* Global bg and text color for dark and light theme set here */}
      <div id='App' className='overflow-hidden bg-background text-textColor'>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <div className='relative min-h-screen min-w-screen mx-auto px-4 m-0 grid grid-cols-1 grid-rows-main items-start justify-center gap-[50px]'>
          <Header tab={tab} changeTab={changeTab} />
          {tab === 'ABOUT' && <About />}
          {tab === 'PROJECTS' && <Projects />}
          {tab === 'RESUME' && <Resume />}
          <Footer tab={tab} />
        </div>
      </div>
    </>
  );
}
