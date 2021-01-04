import Vue from 'vue'
import App from './App.vue'
import "babel-polyfill";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "@/assets/style/common.less"
import "@/assets/style/reset.less"
// import "@project/cdkx/assets/style/page.less"




import tools from "@utils/common";
Vue.use(tools);
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
  // 其组件目录的相对路径
  '@components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})



import router from './router'
import store from './store'

Vue.prototype.$bus = new Vue();

Vue.use(ElementUI, {
  zIndex: 3000 // 全局z-index 初始值
});

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
