import storage from '../storage/index.ts'
import en from './lang/en'
import fr from './lang/fr'
import jp from './lang/jp'
import ko from './lang/ko'
import zh_cn from './lang/zh-cn'
import zh_hk from './lang/zh-hk'

import type { LangType } from './interface.ts'

const _map = { en, fr, jp, ko, zh_cn, zh_hk }


const langTools = {
  getLang: () => storage.getItem<LangType>('lang'),
  setLang: (val: LangType) => storage.setItem('lang', val),
  $i18nMap: () => ({ ..._map[langTools.getLang()] }),//解构复制一份
}

export default langTools