import ProjectPreview from '@/app/sections/projects/ProjectPreview';
import { projectPreview } from '../../../../types/project';

type DisplayProjectsProps = {
  projects: projectPreview[];
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
