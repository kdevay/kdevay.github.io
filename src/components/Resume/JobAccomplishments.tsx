interface JobAccomplishmentsProps {
  accomplishments: React.ReactNode[];
  companyName: string;
}
const JobAccomplishments: React.FC<JobAccomplishmentsProps> = ({
  accomplishments,
  companyName,
}) => {
  return (
    <ul className='text-lg'>
      {accomplishments.map((item, index) => (
        <li className='font-light' key={`${companyName}-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default JobAccomplishments;
