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
      type: 'reference',
      to: [{ type: 'skill' }],
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
