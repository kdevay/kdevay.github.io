interface ProjectImageProps {
  href: string;
  imageSrc: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ href, imageSrc, alt }) => {
  return (
    <div className='m-[10px] mt-0 w-[430px] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300'>
      <a target='_blank' rel='noreferrer' href={href}>
        <img className='w-full h-full block' src={imageSrc} alt={alt} />
      </a>
    </div>
  );
};

export default ProjectImage;
