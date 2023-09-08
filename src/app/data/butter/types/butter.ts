import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface Butter<T> {
  meta: Meta;
  data: Record<string, T[]>;
}

export interface Meta {
  count: number;
  next_page?: number;
  previous_page?: number;
}

export interface Metadata {
  meta: { id: number };
}

export interface Sidenav {
  link: string;
  name: string;
  icon: IconName;
}
