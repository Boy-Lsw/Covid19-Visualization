import langTools from "./utils/i18n"

const init = () => {
  langTools.getLang() ? null : langTools.setLang('zh_cn')
}

export default init