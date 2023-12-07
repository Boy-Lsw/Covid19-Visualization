import request from "../index.ts";
import { CityData } from '../interface.ts'

interface CitiesData extends CityData {
  cities: CityData
}

const getProvinceCitiesData = () => {
  return request<CitiesData>('/province/cities')
}

export default getProvinceCitiesData