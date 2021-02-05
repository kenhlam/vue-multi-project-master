const path = require("path");
const project = require("./project.config.js");
const projectname = process.argv[4];
const currentPage = project[projectname];

let page = {};
page[projectname] = currentPage.page;
console.log(projectname)
console.log(currentPage.page)
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? currentPage.rootPath : "/",
    outputDir: "dist",
    assetsDir: "public",
    indexPath: "index.html",
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                "@lib": path.join(__dirname, "./lib"),
                "@api": path.join(__dirname, "./src/api"),
                "@utils": path.join(__dirname, "./src/utils"),
                "@components": path.join(__dirname, "./src/components"),
                "@project":path.join(__dirname, "./src/project"),
                "@style": path.join(__dirname, "./src/assets/style"),

            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete("prefetch-index");
        config.plugins.delete("preload-index");
        // config.module.rule('images')
        // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        // .use('image-webpack-loader')
        // .loader('image-webpack-loader')
        // .options({ bypassOnDebug: true })
        // if (process.env.use_analyzer || process.env.NODE_ENV === "production") {
        //     config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
        // }
    },

    pages: page,
    lintOnSave: false, // 是否在保存的时候检查
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    runtimeCompiler: false, //是否开启构建版本 开启增加 10KB左右
    css: {
        extract: false, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: process.env.NODE_ENV === "production" ? false : true, // 开启 CSS source maps
        requireModuleExtension: true,
        loaderOptions: {}
    },
    transpileDependencies: [],
    devServer: {
        // 环境配置
        contentBase: path.join(__dirname, "dist"),
        port: 9999,
        https: false,
        hotOnly: false,
        open: true, //配置自动启动浏览器
        compress: false, //启用gzip压缩
        proxy: currentPage.proxy || {}
    },
    pwa: {
        iconPaths: {
            favicon32: `${projectname}.ico`,
            favicon16:  `${projectname}.ico`,
            appleTouchIcon:  `${projectname}.ico`,
            maskIcon:  `${projectname}.ico`,
            msTileImage:  `${projectname}.ico`
        }
    },
    pluginOptions: {}
};