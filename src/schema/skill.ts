const skill = {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          {
            title: 'Framework',
            value: 'framework',
          },
          { title: 'Language', value: 'language' },
        ],
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export default skill;
