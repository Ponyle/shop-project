import axios from 'axios'
// import qs from 'qs'
var instance = axios.create({
    baseURL: '',
});

// const converObj2Str = (params)=>{
//     if (!params) return ''
//     return Object.keys(params).map((r)=>{
//         return r+'='+params[r]
//     }).join('&')
// }
//
// console.log(converObj2Str({'page':1,"size":2}))
// console.log(typeof (({'page':1,"size":2})))
// console.log(qs.stringify({'page':1,"size":2}))
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // let {method,url,params} = config
    // console.log(`${method}了${url}${params}`)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做
    return Promise.reject(error);
});

export const get = (url,params)=> instance.get(url, {params})

export const post = (url,params)=> instance.post(url, params)