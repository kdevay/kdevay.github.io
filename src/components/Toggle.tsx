interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <div id='switchDiv' className='float-right mt-[10px] mr-[10px]'>
      <label className='switch' htmlFor='darkModeToggle'>
        <span className='sr-only'>
          {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </span>
        <input
          id='darkModeToggle'
          onChange={toggleTheme}
          checked={theme === 'dark'}
          type='checkbox'
          role='switch'
          aria-checked={theme === 'dark'}
          aria-label={`Currently in ${theme} mode. Click to switch to ${
            theme === 'dark' ? 'light' : 'dark'
          } mode.`}
        />
        <span className='slider' aria-hidden='true' />
      </label>
    </div>
  );
};

export default Toggle;
