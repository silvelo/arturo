import { Metadata } from '@data/butter/types/butter';
import { Skill } from '@data/skills/skills';

export interface Portfolio extends Metadata {
  title: string;
  url: string;
  photo?: string;
  description: string;
  languages: Skill[];
}
