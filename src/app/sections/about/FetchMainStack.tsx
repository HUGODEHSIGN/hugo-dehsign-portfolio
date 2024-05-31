import DisplayMainStack from '@/app/sections/about/DisplayMainStack';
import { getMainStack } from '@/lib/groq';

export default async function FetchMainStack() {
  const { stack } = await getMainStack();
  console.log(stack);
  return <DisplayMainStack stack={stack} />;
}
