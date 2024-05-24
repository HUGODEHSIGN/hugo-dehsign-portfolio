import DisplaySkills from '@/app/sections/skills/DisplaySkills';
import { getSkills } from '@/lib/groq';
import { Skill } from '../../../../types/skill';

export default async function FetchSkills() {
  const language: Skill[] = await getSkills('language');
  const frontend: Skill[] = await getSkills('frontend');
  const backend: Skill[] = await getSkills('backend');
  const framework: Skill[] = await getSkills('framework');

  const props = { language, frontend, backend, framework };

  return <DisplaySkills {...props} />;
}
