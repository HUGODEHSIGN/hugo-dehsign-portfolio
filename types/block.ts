import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type BlockSize =
  | 'oneTwo'
  | 'twoOne'
  | 'three'
  | 'twoFour'
  | 'fourTwo'
  | 'six';

export type BlockImage = {
  _type: 'content';
  image: SanityImageSource;
  alt: string;
  type: 'image';
};

export type BlockParagraph = {
  _type: 'content';
  paragraph: string;
  type: 'paragraph';
};

export type BlockHeading = {
  _type: 'content';
  heading: string;
  type: 'heading';
};

export type ContentType = BlockHeading | BlockParagraph | BlockImage;

export type Block = {
  _type: BlockSize;
  _key: string;
  one?: ContentType;
  two?: ContentType;
  three?: ContentType;
  four?: ContentType;
  six?: ContentType;
};
