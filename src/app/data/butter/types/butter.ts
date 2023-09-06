interface Meta {
  count: number;
  next_page?: unknown;
  previous_page?: unknown;
}

export interface IButterData<T> {
  meta: Meta;
  data: T;
}
