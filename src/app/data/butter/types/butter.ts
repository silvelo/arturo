export interface IButterData<T> {
  meta: Meta
  data: T
}

interface Meta {
  count: number
  next_page?: any
  previous_page?: any
}
