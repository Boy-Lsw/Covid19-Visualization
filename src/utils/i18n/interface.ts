import zh from '../i18n/lang/zh-cn'

type CustomKeysByObject<T extends string> = { [k in T]: string }
export type LangTime = CustomKeysByObject<'year' | 'month' | 'day'>

export type LangType = 'fr' | 'jp' | 'ko' | 'en' | 'zh_cn' | 'zh_hk'
export type LangMapType = typeof zh
export type ForceLang = (lang: LangType) => void