const mainStack = {
  name: 'mainStack',
  title: 'Main Stack',
  type: 'document',
  fields: [
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
    },
  ],
};

export default mainStack;
