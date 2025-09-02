import DarkIcons from './DarkIcons';
import LightIcons from './LightIcons';

interface FooterProps {
  tab: string;
  mode: string;
}

const Footer: React.FC<FooterProps> = ({ tab, mode }) => {
  return (
    <section>
      {tab !== 'ABOUT' ? (
        mode === 'dark' ? (
          <DarkIcons></DarkIcons>
        ) : (
          <LightIcons></LightIcons>
        )
      ) : null}
    </section>
  );
};

export default Footer;
