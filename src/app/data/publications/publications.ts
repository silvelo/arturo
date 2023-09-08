import { Metadata } from '@data/butter/types/butter';

export interface Publication extends Metadata {
  title: string;
  editorial: string;
  publication_date: string;
  url?: string;
  grade?: string;
  editorial_logo?: string;
}
