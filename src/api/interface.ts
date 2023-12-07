
export type Data = {
  confirmed_count: number,
  suspected_count: number,
  cured_count: number,
  dead_count: number
}

export type Details = {
  name: string,
  adcode: string,
  comment: string,
  update_time: number
}

export type CityData = Details & {
  data: Data
}