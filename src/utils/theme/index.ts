// const styleList = ['_light', 'dark', 'macaron', 'darkblue', 'blue', 'grey']

type ThemeStyle = '_light' | 'dark' | 'macaron' | 'darkblue' | 'blue' | 'grey'

const changeTheme = (val: ThemeStyle) => {
  document.documentElement.setAttribute('theme', val)
}

export default changeTheme