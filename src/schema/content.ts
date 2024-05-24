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
      hidden: ({ parent }) => parent?.type !== 'heading',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      hidden: ({ parent }) => parent?.type !== 'paragraph',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent }) => parent?.type !== 'image',
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'image',
    },
  ],
};

export default content;
