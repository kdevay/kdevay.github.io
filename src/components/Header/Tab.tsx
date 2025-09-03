import React from 'react';
import { cn } from '../../utils/cn';

interface TabProps {
  isOpen: boolean;
  changeTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
  tabName: string;
}

const Tab: React.FC<TabProps> = ({ isOpen, changeTab, tabName }) => {
  return (
    <div>
      <button
        onClick={changeTab}
        className={cn(
          'font-main text-[13px] h-[23px] tracking-[3px] p-0 mb-0',
          isOpen && 'text-primary',
        )}
        id={tabName}
      >
        {tabName}
      </button>
      {isOpen ? <hr></hr> : null}
    </div>
  );
};

export default Tab;
