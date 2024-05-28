import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Skill } from './skill';

export interface ProjectPreview {
  _id: string;
  name: string;
  slug: string;
  description: string;
  github: string;
  link: string;
  preview: SanityImageSource;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  github: string;
  stack: Skill[];
}
