import { Metadata } from '@data/butter/types/butter';

export interface Experience extends Metadata {
  job: string;
  company_name: string;
  start_date: string;
  current: boolean;
  end_date?: string;
  company_logo?: string;
  description?: string;
}
