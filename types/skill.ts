export type Category = 'frontend' | 'backend' | 'framework' | 'language';

export type Skill = {
  _id: string;
  category: Category;
  _type: 'skill';
  name: string;
  logo: string;
};
