import { client } from '@/lib/client';
import { groq } from 'next-sanity';

export async function getSkills(category: string) {
  return await client.fetch(
    groq`*[_type == "skill" && category == $category]{
    _id,
    category,
    _type,
    name,
    "logo": logo.asset->url
  }`,
    { category }
  );
}
