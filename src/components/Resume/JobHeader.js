const JobHeader = ({ companyName, title, location, startDate, endDate }) => {
  return (
    <>
      <div className='topLine'>
        <h3 className='resBody bold'>{companyName}</h3>
        <h3 className='tallLine'>|</h3>
        <h4 className='resBody'>{title}</h4>
      </div>
      <h5 className='resBody spacey'>{location}</h5>
      <h5 className='resBody'>
        {startDate}&nbsp;&nbsp; ⇛ &nbsp;&nbsp;{endDate}
      </h5>
    </>
  );
};

export default JobHeader;
