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
