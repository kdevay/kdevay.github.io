interface ProjectImageProps {
  href: string;
  imageSrc: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ href, imageSrc, alt }) => {
  return (
    <div className='m-[10px] mt-0 w-[430px] rounded-[6px] overflow-hidden border-4 border-darkGray'>
      <a target='_blank' rel='noreferrer' href={href}>
        <img className='w-full h-full block' src={imageSrc} alt={alt} />
      </a>
    </div>
  );
};

export default ProjectImage;
