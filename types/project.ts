import { Block } from './block';

export interface Project {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'project';
  _updatedAt: string;
  block: Block[];
  github: string;
  link: string;
  name: string;
  slug: Slug;
  stack: Stack[];
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Stack {
  _type: 'reference';
  _key: string;
  _ref: string;
  _strengthenOnPublish?: StrengthenOnPublish;
}

export interface StrengthenOnPublish {
  type: string;
}
