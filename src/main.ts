import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initAMapApiLoader } from '@vuemap/vue-amap';
import configs from '@/config/index'

import '@vuemap/vue-amap/dist/style.css'
import '@/assets/style/theme.less'
import '@/assets/style/reset.less'
import '@/assets/style/common.less'
import '@/assets/style/media.less'

initAMapApiLoader({
  key: configs.VueAmapConfig.key,
  securityJsCode: configs.VueAmapConfig.securityJsCode,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
