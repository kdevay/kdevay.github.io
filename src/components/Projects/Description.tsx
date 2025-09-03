interface ProjectDescriptionProps {
  title: string;
  description: string[];
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className='flex flex-col items-start w-[430px] gap-[10px] font-light text-[16px]'>
      <h2 className='font-heading tracking-[4px] mb-3'>{title}</h2>
      {description.map((item, index) => (
        <h3 key={title + index}>{item}</h3>
      ))}
    </div>
  );
};

export default ProjectDescription;
