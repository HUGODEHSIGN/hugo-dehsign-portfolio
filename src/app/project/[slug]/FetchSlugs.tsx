import ProjectSelect from '@/app/project/[slug]/ProjectSelect';
import { getSlugs } from '@/lib/groq';
import { Slug } from '../../../../types/slug';

export default async function FetchSlugs() {
  const slugs: Slug[] = await getSlugs();
  return <ProjectSelect slugs={slugs} />;
}
