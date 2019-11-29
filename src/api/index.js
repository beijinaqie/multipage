import Vue from 'vue'
import axios from 'axios'

let Axios = axios.create({
    baseURL: '/api/', //http://api.mdm.work 测试 //api.mdm.bar 正式
    headers: {
        'Content-Type':'application/json'
    }
});


// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Accept-Language'] = localStorage.getItem('LANGUAGE') === 'English' ? 'en' : 'zh';
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default {
    install(Vue, opt) {
        Vue.prototype.$http = Axios;
    }
}