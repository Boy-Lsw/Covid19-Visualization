
type LocalStorageType = 'lang' | 'theme_order'

const storage = {
  setItem: (type: LocalStorageType, val: string) => {
    localStorage.setItem(type, val)
  },
  getItem: <T extends string>(type: LocalStorageType): T => {
    const value = localStorage.getItem(type)
    return value ? value : ('' as any)
  },
  removeItem: (type: LocalStorageType) => {
    localStorage.removeItem(type)
  }
}

export default storage