import DarkIcons from './DarkIcons';
import LightIcons from './LightIcons';
import { useTheme } from '../utils/ThemeProvider';

interface FooterProps {
  tab: string;
}

const Footer: React.FC<FooterProps> = ({ tab }) => {
  const { theme } = useTheme();
  return (
    <section>
      {tab !== 'ABOUT' ? (
        theme === 'dark' ? (
          <DarkIcons></DarkIcons>
        ) : (
          <LightIcons></LightIcons>
        )
      ) : null}
    </section>
  );
};

export default Footer;
