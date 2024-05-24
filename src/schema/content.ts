import { ContentType } from '../../types/block';

type ParentType = {
  parent: {
    type: ContentType;
  };
};

const content = {
  name: 'content',
  title: 'Content',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Heading', value: 'heading' },
          { title: 'Paragraph', value: 'paragraph' },
          { title: 'Image', value: 'image' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      hidden: ({ parent }: ParentType) => parent?.type !== 'heading',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      hidden: ({ parent }: ParentType) => parent?.type !== 'paragraph',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent }: ParentType) => parent?.type !== 'image',
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
      hidden: ({ parent }: ParentType) => parent?.type !== 'image',
    },
  ],
};

export default content;
