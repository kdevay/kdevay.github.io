// Data
import skills from '../../assets/data/skills';
import jobs from '../../assets/data/Jobs';
// Components
import JobHeader from './JobHeader';
import JobAccomplishments from './JobAccomplishments';
import SectionHeading from './SectionHeading';

export default function Resume() {
  return (
    <div className='flex flex-col items-start gap-8 justify-center max-w-[950px] mx-auto font-main'>
      <div>
        <SectionHeading heading='SKILLS' />
        <h3 className='font-light text-lg'>{skills.join(' • ')}</h3>
      </div>

      <div className='flex flex-col items-start justify-center'>
        <SectionHeading heading='EXPERIENCE' />
        <div className='flex flex-col items-start justify-center gap-4'>
          {jobs.map(job => (
            <div>
              <JobHeader
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                startDate={job.startDate}
                endDate={job.endDate}
              />
              <JobAccomplishments
                accomplishments={job.accomplishments}
                companyName={job.companyName}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='font-main'>
        <SectionHeading heading='EDUCATION' />
        <h3 className='font-light'>
          Louisiana State University ｜ Baton Rouge, LA ｜ December 2020
        </h3>
        <h4 className='font-light'>B.A. English, Sociology Minor</h4>
      </div>
    </div>
  );
}
