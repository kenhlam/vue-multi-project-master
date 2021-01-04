module.exports = {
    
    demo1: {
        rootPath: "/portal/cdkx/test",
        page: {
            entry: "src/project/demo1/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "苏州科协demo1",
            chunks: ["chunk-vendors", "chunk-common", "demo1"]
        },
        proxy: {
            "/api": {
                
                target: "http://szst.suzhou.gov.cn/",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/data": {
                target: "http://szst.suzhou.gov.cn/",
                changeOrigin: true, // 是否改变域名
                ws: true

            }


        }
    }
}
