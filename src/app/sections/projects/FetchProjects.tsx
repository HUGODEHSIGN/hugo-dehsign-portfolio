import DisplayProjects from '@/app/sections/projects/DisplayProjects';
import { getProjects } from '@/lib/groq';
import { projectPreview } from '../../../../types/project';

export default async function FetchProjects() {
  const projects: projectPreview[] = await getProjects();
  console.log(projects);
  return <DisplayProjects projects={projects} />;
}
