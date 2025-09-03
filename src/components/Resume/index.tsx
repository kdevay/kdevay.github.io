// Data
import skills from '../../Data/skills';
import jobs from '../../Data/Jobs';
// Components
import JobHeader from './JobHeader';
import JobAccomplishments from './JobAccomplishments';

export default function Resume() {
  return (
    <div className='flex flex-col items-start gap-8 justify-center max-w-[950px] mx-auto font-main'>
      <div>
        <h2 className='font-heading tracking-[4px] text-xl pb-3'>SKILLS</h2>
        <h3 className='font-light'>{skills.join(' • ')}</h3>
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h2 className='font-heading tracking-[4px] text-xl pb-3'>EXPERIENCE</h2>
        <div className='flex flex-col items-start justify-center gap-4'>
          {jobs.map(job => (
            <div>
              <JobHeader
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                location={job.location}
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
        <h2 className='font-heading tracking-[4px] text-xl pb-3'>EDUCATION</h2>
        <h3 className='font-light'>
          Louisiana State University ｜ Baton Rouge, LA ｜ December 2020
        </h3>
        <h4 className='font-light'>B.A. English, Sociology Minor</h4>
      </div>
    </div>
  );
}
