import dLin from '../assets/icons/dLin.png';
import dOctocat from '../assets/icons/dOctocat.png';
import dMail from '../assets/icons/dMail.png';

export default function DarkIcons() {
  return (
    <div className='flex justify-center gap-8 mt-[30px]'>
      <a target='_blank' href='https://www.linkedin.com/in/kat-devay/'>
        <img className='size-[50px]' src={dLin} alt='linkedin logo' />
      </a>
      <a target='_blank' href='https://github.com/kdevay'>
        <img className='size-[50px]' src={dOctocat} alt='github logo' />
      </a>
      <a target='_blank' href='mailto:katdevay@gmail.com'>
        <img className='size-[50px]' src={dMail} alt='email icon' />
      </a>
    </div>
  );
}
