import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入某一个目录,默认会去找索引文件(index.js index.vue index.json)  基于webpack
// 2.@ 是一个别名 指定的是 /src 路径 一个绝对路径 如果不是vue-cli项目不能用@ 基于webpack
import router from '@/router'
Vue.use(ElementUI)

Vue.config.productionTip = false

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js的作用是入口文件
// 职责1:创建一个根实例
// 职责2:负责全局范围的依赖导入
