import { Metadata } from '@data/butter/types/butter';

export interface Certification extends Metadata {
  name: string;
  company: string;
  url: string;
  expires: boolean;
  company_logo?: string;
  expedition_date?: string;
  expiration_date?: string;
}
