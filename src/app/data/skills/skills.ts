import { Metadata } from '@data/butter/types/butter';

export interface Skill extends Metadata {
  language: string;
  color?: string;
  level?: number;
}
