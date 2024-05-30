import { client } from '@/lib/client';
import { groq } from 'next-sanity';

export async function getSkills(category: string) {
  return await client.fetch(
    groq`*[_type == "skill" && category == $category]{
    _id,
    category,
    name,
    "logo": logo.asset->url
  }`,
    { category }
  );
}

export async function getProjects() {
  return await client.fetch(
    groq`*[_type == "project"]{
    _id,
    name,
    "slug": slug.current,
    description,
    github,
    link,
    preview
  }`
  );
}

export async function getSlugs() {
  return await client.fetch(
    groq`*[_type == "project"]{
    name,
    "slug": slug.current,
  }`
  );
}

export async function getProject(slug: string) {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      name,
      "stack": stack[]->{_id, name, "logo": logo.asset->url},
      link,
      github,
      description,
    }`,
    { slug }
  );
}

export async function getBlocks(slug: string) {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      block,
    }`,
    { slug }
  );
}
