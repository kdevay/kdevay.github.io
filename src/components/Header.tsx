import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn.ts';

export default function Header(props) {
  const { changeTab, tab, mode } = props;
  // State selector
  const [isAboutTabOpen, setIsAboutTabOpen] = useState(
    tab === 'about' ? 'selected' : '',
  );
  const [isProjectsTabOpen, setIsProjectsTabOpen] = useState(
    tab === 'projects' ? 'selected' : '',
  );
  const [isResumeTabOpen, setIsResumeTabOpen] = useState(
    tab === 'resume' ? 'selected' : '',
  );
  // State color

  useEffect(() => {
    setIsAboutTabOpen(tab === 'about' ? 'selected' : '');
    setIsProjectsTabOpen(tab === 'projects' ? 'selected' : '');
    setIsResumeTabOpen(tab === 'resume' ? 'selected' : '');
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
        FULL STACK WEB DEVELOPER
      </h2>

      <div id='tabs' className='w-[321px] flex justify-between'>
        <div>
          <div
            onClick={change}
            className={cn(
              'font-main text-[13px] h-[23px] tracking-[3px] p-0 mb-0',
              isAboutTabOpen && 'text-primary',
            )}
            id='about'
          >
            ABOUT
          </div>
          {isAboutTabOpen ? <hr></hr> : null}
        </div>
        <div>
          <div
            onClick={change}
            className={cn(
              'font-main text-[13px] h-[23px] tracking-[3px] p-0 mb-0',
              isProjectsTabOpen && 'text-primary',
            )}
            id='projects'
          >
            PROJECTS
          </div>
          {isProjectsTabOpen ? <hr></hr> : null}
        </div>
        <div>
          <div
            onClick={change}
            className={cn(
              'font-main text-[13px] h-[23px] tracking-[3px] p-0 mb-0',
              isResumeTabOpen && 'text-primary',
            )}
            id='resume'
          >
            RESUME
          </div>
          {isResumeTabOpen ? <hr className='w-62px'></hr> : null}
        </div>
      </div>
    </div>
  );
}
