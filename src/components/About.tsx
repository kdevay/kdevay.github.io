import { cn } from '../utils/cn';
import { useTheme } from '../utils/ThemeProvider';
import prof from './Resume/prof.jpeg';
import DarkIcons from './DarkIcons';
import LightIcons from './LightIcons';

export default function About() {
  const { theme } = useTheme();

  return (
    <div className='h-fit flex flex-wrap items-end justify-center content-center gap-[50px]'>
      <div className='flex flex-col items-start w-[458px] font-main font-light'>
        <p className='text-[30px]'>Hi, I'm Kat!</p>
        <br></br>
        <p className='text-[20px]'>
          I'm a full stack software engineer, looking to join a team of
          passionate professionals.
        </p>
        <br></br>
        <p className='text-[20px]'>Let's work together!</p>
        <br></br>
        {theme === 'dark' ? <DarkIcons></DarkIcons> : <LightIcons></LightIcons>}
      </div>
      <div className={cn('w-[220px] border-[8px] p-[20px] border-border')}>
        <img className='w-full' src={prof} alt='Kat de Vay'></img>
      </div>
    </div>
  );
}
