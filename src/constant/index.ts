import zh_cn from "@/utils/i18n/lang/zh-cn";

import type { ForceLang, LangMapType } from "@/utils/i18n/interface";
import type { CountryData } from "@/api/country";
import type { CityData } from "@/api/interface";

const i18nMap: LangMapType = { ...zh_cn }
const forceLang: ForceLang = (lang) => { }
const country: CountryData = {
  comment: '',
  update_time: 0,
  data: { confirmed_count: 0, suspected_count: 0, cured_count: 0, dead_count: 0 }
}
const province: CityData[] = []
const cities: CityData[] = []
const provinceCities: CityData[] = []

const defaultValue = {
  i18nMap,
  forceLang,
  country,
  province,
  cities,
  provinceCities
}

export default defaultValue