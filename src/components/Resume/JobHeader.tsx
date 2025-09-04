interface JobHeaderProps {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
}

const JobHeader: React.FC<JobHeaderProps> = ({
  companyName,
  jobTitle,
  startDate,
  endDate,
}) => {
  return (
    <div className='flex justify-between w-full font-light text-xl'>
      <div className='flex items-center tracking-[2px]'>
        <h3 className='font-medium'>{companyName}</h3>
        <h3 className='font-courier block weight-extraLight text-[24px]'>|</h3>
        <h4>{jobTitle}</h4>
      </div>
      <h5 className='text-sm'>
        {startDate}&nbsp;&nbsp; - &nbsp;&nbsp;{endDate}
      </h5>
    </div>
  );
};

export default JobHeader;
