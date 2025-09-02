import { cn } from '../../utils/cn';

interface TabProps {
  isOpen: boolean;
  changeTab: (e: React.MouseEvent<HTMLDivElement>) => void;
  tabName: string;
}

const Tab: React.FC<TabProps> = ({ isOpen, changeTab, tabName }) => {
  return (
    <div>
      <div
        onClick={changeTab}
        className={cn(
          'font-main text-[13px] h-[23px] tracking-[3px] p-0 mb-0',
          isOpen && 'text-primary',
        )}
        id={tabName}
      >
        {tabName}
      </div>
      {isOpen ? <hr></hr> : null}
    </div>
  );
};

export default Tab;
