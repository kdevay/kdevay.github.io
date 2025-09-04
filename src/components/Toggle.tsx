interface ToggleProps {
  mode: string;
  toggleMode: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ mode, toggleMode }) => {
  return (
    <div id='switchDiv' className='float-right mt-[10px] mr-[10px]'>
      <label className='switch' htmlFor='darkModeToggle'>
        <span className='sr-only'>
          {mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </span>
        <input
          id='darkModeToggle'
          onClick={toggleMode}
          checked={mode === 'dark'}
          type='checkbox'
          role='switch'
          aria-checked={mode === 'dark'}
          aria-label={`Currently in ${mode} mode. Click to switch to ${
            mode === 'dark' ? 'light' : 'dark'
          } mode.`}
        />
        <span className='slider' aria-hidden='true' />
      </label>
    </div>
  );
};

export default Toggle;
