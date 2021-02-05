module.exports = {
    demo1: {
        rootPath: "/portal/cdkx/test",
        page: {
            entry: "src/project/demo1/main.js",
            template: "public/index.html",
            filename: "index.html",
            title: "demo1",
            chunks: ["chunk-vendors", "chunk-common", "demo1"]
        },
        proxy: {
            "/api": {
                target: "",  //qdkfcs 1
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            // 上传特殊处理
            "/attachment": {
                target: "",  //qdkfcs 1
                changeOrigin: true, // 是否改变域名
                ws: true,

            },
            "/data": {
                target: "",
                changeOrigin: true, // 是否改变域名
                ws: true

            }


        }
    }

}


