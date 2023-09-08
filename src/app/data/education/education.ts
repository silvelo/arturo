import { Metadata } from '@data/butter/types/butter';

export interface Education extends Metadata {
  institution: string;
  degree: string;
  start_date: string;
  grade: number;
  description?: string;
  end_date?: string;
  institution_logo?: string;
}
