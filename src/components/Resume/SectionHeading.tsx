interface SectionHeadingProps {
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
  return (
    <h2 className='font-heading tracking-[4px] text-2xl pb-3'>{heading}</h2>
  );
};

export default SectionHeading;
