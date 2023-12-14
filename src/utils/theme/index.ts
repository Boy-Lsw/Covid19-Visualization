// const styleList = ['_light', 'dark', 'macaron', 'darkblue', 'blue', 'grey']

// type ThemeStyle = '_light' | 'dark' | 'macaron' | 'darkblue' | 'blue' | 'grey'

type AdaptationData = {
  theme: string
  light: Function[]
  dark: Function[]
}

const changeTheme = (val: string) => {
  document.documentElement.setAttribute('theme', val)
}

const adaptation = () => {
  const data: AdaptationData = {
    theme: '',
    light: [],
    dark: []
  }
  const mediaQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark')
  if (!mediaQuery) return data
  const handle = () => {
    if (mediaQuery.matches) {
      // 深色模式
      data.theme = 'dark'
      data.dark.forEach((f) => f())
    } else {
      // 浅色模式
      data.theme = '_light'
      data.light.forEach((f) => f())
    }
  }
  handle()
  // 监听系统模式变化(跟随系统)
  mediaQuery.addEventListener('change', () => {
    console.log(123)
    handle()
  })
  return data
}

const styleUtils = {
  changeTheme,
  adaptation
}

export default styleUtils