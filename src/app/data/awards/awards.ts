import { Metadata } from '@data/butter/types/butter';

export interface Award extends Metadata {
  title: string;
  expedition_date: string;
  description: string;
  issued: string;
  testimonials: string;
  issued_logo?: string;
}
