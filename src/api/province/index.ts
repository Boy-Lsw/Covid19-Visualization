import request from "../index.ts";

import { CityData } from '../interface.ts'

const getProvinceData = () => {
  return request<CityData>('/province')
}

export default getProvinceData