import DisplayProject from '@/app/project/[slug]/DisplayProject';
import { getProject } from '@/lib/groq';
import { Project } from '../../../../types/project';

type FetchProjectProps = {
  slug: string;
};

export default async function FetchProject({ slug }: FetchProjectProps) {
  const project: Project = await getProject(slug);

  return <DisplayProject project={project} />;
}
