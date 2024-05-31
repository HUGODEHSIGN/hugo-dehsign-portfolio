import DisplayAbout from '@/app/sections/about/DisplayAbout';
import { getAbout } from '@/lib/groq';

export const dynamic = 'force-dynamic';

export default async function FetchAbout() {
  const { aboutMe } = await getAbout();

  return <DisplayAbout about={aboutMe} />;
}
