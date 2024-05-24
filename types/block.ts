import { Image } from './image';

export type BlockType =
  | 'oneTwo'
  | 'TwoOne'
  | 'three'
  | 'twoFour'
  | 'fourTwo'
  | 'six';

export type ContentType = 'heading' | 'paragraph' | 'image';

export interface Block {
  _key: string;
  _type: BlockType;
  one?: One;
  two?: Two;
  three?: Three;
  four?: Four;
  six?: Six;
}

export interface One {
  _type: 'content';
  heading?: string;
  paragraph?: string;
  image?: Image;
  alt?: string;
  type: ContentType;
}

export interface Two {
  _type: 'content';
  heading?: string;
  paragraph?: string;
  image?: Image;
  alt?: string;
  type: ContentType;
}

export interface Three {
  _type: 'content';
  heading?: string;
  paragraph?: string;
  image?: Image;
  alt?: string;
  type: ContentType;
}

export interface Four {
  _type: 'content';
  heading?: string;
  paragraph?: string;
  image?: Image;
  alt?: string;
  type: ContentType;
}

export interface Six {
  _type: 'content';
  heading?: string;
  paragraph?: string;
  image?: Image;
  alt?: string;
  type: ContentType;
}
