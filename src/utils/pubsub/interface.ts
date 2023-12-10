import { CityData } from "@/api/interface"

export type EventsName = 'switchStyle' | 'searchAreaData' | 'highArea'
export type subscribeCallback<T = any> = (name: EventsName, fn: T) => void
export type SwitchStyle = {
  style: string,
  key: number
}
export type SearchAreaDataType = CityData & {
  isMsg?: boolean
}