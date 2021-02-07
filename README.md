

## 说明

基于vue-cli3

多入口多文件分项目打包  独立的项目配置project.config.js

code 为PC端 vue+vue-router-element+axios+less

mobile为移动端vue+vue-router+vant+axios+less

## 语法特色

动态路由注册

动态组件注册

动态路由及路由模块化

vue:  provider inject slot数据通信模式


## 项目配置

package.json配置开发和打包指令

"serve:demo1": "vue-cli-service serve --progress demo1",
"build:demo1": "vue-cli-service build --progress demo1",

project.config.js配置代理及部署配置

module.exports = {
    
    demo1: {
        rootPath: "/portal/cdkx/test", //参照vue.config.js rootPath
        <!-- 参照vue.config.js page配置 -->
        page: {
            entry: "src/project/demo1/main.js", //项目入口 
            template: "public/index.html",  //项目模板html
            filename: "index.html",
            title: "demo1",
            chunks: ["chunk-vendors", "chunk-common", "demo1"]
        },
        <!-- 参照vue.config.js proxy配置 -->
        proxy: {
            "/api": {
                
                target: "",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/data": {
                target: "",
                changeOrigin: true, // 是否改变域名
                ws: true

            }


        }
    }

}




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve:demo1
```

### Compiles and minifies for production
```
npm run build:demo1
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




