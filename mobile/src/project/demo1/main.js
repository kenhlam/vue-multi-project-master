
import 'amfe-flexible';
import "@style/common.less";
import "@style/reset.less";
// import "@project/demo1/style/page.less";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Vant from 'vant';
import 'vant/lib/index.css';
debugger
Vue.use(Vant);

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

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

import FastClick from 'fastclick';
FastClick.attach(document.body);
// 公共方法
import tools from "@utils/common";
Vue.use(tools);
debugger
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");