interface JobHeaderProps {
  companyName: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
}

const JobHeader: React.FC<JobHeaderProps> = ({
  companyName,
  jobTitle,
  location,
  startDate,
  endDate,
}) => {
  return (
    <>
      <div className='font-light flex items-center'>
        <h3 className='bold tracking-[2px]'>{companyName}</h3>
        <h3 className='font-courier block weight-extraLight text-[18px]'>|</h3>
        <h4>{jobTitle}</h4>
      </div>
      <h5 className='tracking-[3px]'>{location}</h5>
      <h5>
        {startDate}&nbsp;&nbsp; ⇛ &nbsp;&nbsp;{endDate}
      </h5>
    </>
  );
};

export default JobHeader;
