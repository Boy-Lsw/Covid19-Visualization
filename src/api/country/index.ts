import request from "../index.ts";
import { Data } from '../interface.ts'
// export interface CountryData extends Data {
//   comment: string
//   update_time: number
// }
export type CountryData = {
  comment: string
  update_time: number,
  data: Data
}

const getCountryData = () => {
  return request<CountryData>('/country')
}

export default getCountryData