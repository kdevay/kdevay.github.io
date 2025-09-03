import prof from './Resume/prof.jpeg';
import DarkIcons from './DarkIcons';
import LightIcons from './LightIcons';
import { cn } from '../utils/cn';

export default function About(props) {
  const { mode } = props;

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
