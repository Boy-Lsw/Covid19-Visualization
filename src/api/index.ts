import configs from '../config/index.ts'

const request = <T = any>(path: string) => new Promise<T>(
  resolve => fetch(configs.url + path)
    .then(r => r.json())
    .then(res => resolve(res))
)

export default request