import Vue from 'vue';
import {Notify, Toast} from 'vant';

Vue.use(Notify);
Vue.use(Toast);
import axios from "axios";

import {getlocalStorage} from './localStorage'

const target = process.env.NODE_ENV == 'production' ? "" : "/api";

const instance = axios.create({
    //创建axios实例，在这里可以设置请求的默认配置
    timeout: 50000,
    baseURL: target
});

instance.defaults.headers.post["Content-Type"] =
    "application/json;charset=UTF-8";

// 设置http状态码
let httpCode = {
    301: "资源(网页等)被永久转移到其它URL",
    400: "请求参数错误",
    401: "权限不足, 请重新登录",
    403: "服务器拒绝本次访问",
    404: "请求资源未找到",
    500: "内部服务器错误",
    501: "服务器不支持该请求中使用的方法",
    502: "网关错误",
    504: "网关超时"
};

/** 添加请求拦截器 **/
instance.interceptors.request.use(
    config => {
        // loadingInstance = Loading.service({
        //   // 发起请求时加载全局loading，请求失败或有响应时会关闭
        //   lock: false,
        //   text: "正在加载中...",
        //   spinner: "el-icon-loading"
        //   //background: 'rgba(0, 0, 0, 0.7)'
        // });

        // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
        // if (config.url.includes("pur/contract/export")) {
        //   config.headers["responseType"] = "blob";
        // }
        // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
        // if (config.url.includes("pur/contract/upload")) {
        //   config.headers["Content-Type"] = "multipart/form-data";
        // }
        return config;
    },
    error => {
        // 请求错误调用reject返回错误信息
        return Promise.reject(error);
    }
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
    response => {
        // if (response.data.code === 1) {
        //     // 响应结果里的status: ok是我与后台的约定，大家可以根据实际情况去做对应的判断
        //     return Promise.resolve(response.data);
        // } else {
        //     Notify(response.data.msg)
        //     return Promise.reject(response.data.msg);
        // }
        return Promise.resolve(response.data)
    },
    error => {
        if (error.response) {
            // 根据请求失败的http状态码去给用户相应的提示
            let tips =
                error.response.status in httpCode
                    ? httpCode[error.response.status]
                    : error.response.data.msg;
            Notify(tips)
            // if (error.response.status === 404) {
            //     // token或者登录失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
            //     router.push({
            //         path: `/`
            //     });
            // }
            return Promise.reject(error);
        } else {
            //console.log(error)
            Notify("请求超时, 请刷新重试")
            return Promise.reject(new Error("请求超时, 请刷新重试"));
        }
    }
);

/* 统一封装get请求 */
export const KY_Get = (url, params, config = {}) => {
    let token = "";
    if(getlocalStorage()){
        token = getlocalStorage().token;
    }
    return new Promise((resolve, reject) => {
        instance({
            method: "get",
            url,
            params,
            ...config,
            headers:{
                token:token
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

/* 统一封装post请求  */
export const KY_Post = (url, data, config = {}) => {
    let token = "";
    if(getlocalStorage()){
        token = getlocalStorage().token;
    }
    return new Promise((resolve, reject) => {
        instance({
            method: "post",
            url,
            data,
            ...config,
            headers:{
                token:token
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};
