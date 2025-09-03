import ProjectImage from './Image';
import ProjectDescription from './Description';
import projects from '../../Data/projects';

export default function Projects(props) {
  return (
    <div className='font-main w-full flex flex-col items-start justify-center gap-[90px]'>
      {projects.map((project, index) => (
        <div className='flex flex-wrap w-[90vw] gap-[25px] justify-center'>
          <ProjectImage
            key={index}
            href={project.href}
            imageSrc={project.imageSrc}
            alt={project.alt}
          />
          <ProjectDescription
            key={index}
            title={project.title}
            description={project.description}
          />
        </div>
      ))}
    </div>
  );
}
