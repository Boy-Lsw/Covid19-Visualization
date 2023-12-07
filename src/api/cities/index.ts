import request from "../index.ts";

import { CityData } from '../interface.ts'

const getCityData = () => {
  return request<CityData>('/cities')
}

export default getCityData