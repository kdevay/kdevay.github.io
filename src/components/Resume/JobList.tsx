const JobList = ({ list, companyName }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li className='font-light' key={`${companyName}-${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default JobList;
