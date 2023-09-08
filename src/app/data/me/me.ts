import { Metadata } from '@data/butter/types/butter';

export interface Me extends Metadata {
  name: string;
  surname: string;
  job: string;
  profile_photo: string;
  description: string;
  header_photo: string;
}
