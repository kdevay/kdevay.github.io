import { useEffect, useState } from 'react';
import Tab from './Tab';

interface HeaderProps {
  changeTab: (e: React.MouseEvent<HTMLDivElement>) => void;
  tab: string;
  mode: string;
}

const Header: React.FC<HeaderProps> = ({ changeTab, tab }) => {
  // State selector
  const [isAboutTabOpen, setIsAboutTabOpen] = useState(tab === 'ABOUT');
  const [isProjectsTabOpen, setIsProjectsTabOpen] = useState(
    tab === 'PROJECTS',
  );
  const [isResumeTabOpen, setIsResumeTabOpen] = useState(tab === 'RESUME');

  useEffect(() => {
    setIsAboutTabOpen(tab === 'ABOUT');
    setIsProjectsTabOpen(tab === 'PROJECTS');
    setIsResumeTabOpen(tab === 'RESUME');
  }, [tab]);

  const change = e => {
    changeTab(e.target.id);
  };

  return (
    <div id='header' className='flex flex-col items-center gap-4 pb-4'>
      <div className='flex justify-center items-end font-heading'>
        <h1 className='m-0 font-heading'>KAT &nbsp; DE</h1> &nbsp;
        <h1 className='text-bigV m-bigV'> V</h1>
        <h1 className='m-0'>AY</h1>
      </div>

      <h2
        id='title'
        className='font-main text-[18px] m-[-4px] mb-[22px] tracking-[3px] font-medium'
      >
        FULL STACK SOFTWARE ENGINEER
      </h2>

      <div id='tabs' className='w-[321px] flex justify-between'>
        <Tab isOpen={isAboutTabOpen} changeTab={change} tabName='ABOUT' />
        <Tab isOpen={isProjectsTabOpen} changeTab={change} tabName='PROJECTS' />
        <Tab isOpen={isResumeTabOpen} changeTab={change} tabName='RESUME' />
      </div>
    </div>
  );
};

export default Header;
