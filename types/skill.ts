export type Category = 'frontend' | 'backend' | 'framework' | 'language';

export type Skill = {
  _id: string;
  category?: Category;
  name: string;
  logo: string;
};
