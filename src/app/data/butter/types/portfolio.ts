import { Skill } from '@root/src/app/data/butter/types/skills';

export interface PortfolioObject {
  portfolios: Portfolio[];
}

export interface Portfolio {
  title: string;
  description: string;
  url: string;
  photo: string;
  languages: Skill[];
}
