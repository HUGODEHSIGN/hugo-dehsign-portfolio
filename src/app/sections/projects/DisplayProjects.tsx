import ProjectPreview from '@/app/sections/projects/ProjectPreview';
import { ProjectPreview as Project } from '../../../../types/project';

type DisplayProjectsProps = {
  projects: Project[];
};

export default function DisplayProjects({ projects }: DisplayProjectsProps) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectPreview
          key={project._id}
          {...project}
        />
      ))}
    </div>
  );
}
