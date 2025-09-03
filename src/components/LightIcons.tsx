import lin from '../icons/lin.png';
import octocat from '../icons/octocat.png';
import mail from '../icons/mail.png';

export default function HeaderL() {
  return (
    <div className='flex justify-center gap-8 mt-[30px]'>
      <a target='_blank' href='https://www.linkedin.com/in/kat-devay/'>
        <img className='size-[50px]' src={lin} alt='linkedin logo' />
      </a>
      <a target='_blank' href='https://github.com/kdevay'>
        <img className='size-[50px]' src={octocat} alt='github logo' />
      </a>
      <a target='_blank' href='mailto:katdevay@gmail.com'>
        <img className='size-[50px]' src={mail} alt='email icon' />
      </a>
    </div>
  );
}
