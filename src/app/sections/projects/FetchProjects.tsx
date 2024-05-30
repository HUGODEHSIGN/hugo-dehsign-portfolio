import DisplayProjects from '@/app/sections/projects/DisplayProjects';
import { getProjects } from '@/lib/groq';
import { ProjectPreview } from '../../../../types/project';

export default async function FetchProjects() {
  const projects: ProjectPreview[] = await getProjects();
  console.log(projects);
  return <DisplayProjects projects={projects} />;
}
