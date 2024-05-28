const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'url',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
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
    {
      name: 'block',
      title: 'Blocks',
      type: 'array',
      of: [
        { type: 'oneTwo' },
        { type: 'twoOne' },
        { type: 'three' },
        { type: 'twoFour' },
        { type: 'fourTwo' },
        { type: 'six' },
      ],
    },
  ],
};

export default project;
