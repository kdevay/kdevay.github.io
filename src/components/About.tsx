import React from 'react';
import prof from '../images/prof.jpeg';
import DarkIcons from './DarkIcons.js';
import LightIcons from './LightIcons.js';
import { cn } from '../utils/cn.ts';

export default function About(props) {
  const { mode } = props;

  return (
    <div className='w-[80vw] flex flex-wrap items-center justify-items-center justify-content-center gap-[50px]'>
      <div className='flex flex-col items-start w-[458px] font-main font-light mb-[50px]'>
        <p className='text-4xl'>Hi, I'm Kat!</p>
        <br></br>
        <p className='text-[20px]'>
          I'm a full stack developer, looking to join a team of passionate
          professionals.
        </p>
        <br></br>
        <p className='text-[20px]'>Let's work together!</p>
        <br></br>
        {mode === 'dark' ? <DarkIcons></DarkIcons> : <LightIcons></LightIcons>}
      </div>
      <div
        className={cn(
          'w-[220px] border-[8px] p-[20px]',
          mode === 'dark' ? 'border-white' : 'border-darkGray',
        )}
      >
        <img className='w-full' src={prof} alt='Kat de Vay'></img>
      </div>
    </div>
  );
}
