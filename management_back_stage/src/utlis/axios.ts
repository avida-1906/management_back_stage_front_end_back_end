/* 
    这个文件不能使用pinia，因为初始化之前不能使用它
*/


import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

/* 
    引入路由文件index.ts里边导出的默认值router。
    还有一种写法：
    import { useRouter } from 'vue-router';
    const router = useRouter();
    但是这种写法会报错：[Vue warn]: inject() can only be used inside setup() or functional components.
    但是在.vue组件里边可以这样写。
*/
import router from '@/router/index';

/* 
    引入确认/取消弹窗
*/
import { message } from '@/components/function_box/index'

//创建axios实例
const request = axios.create({
    baseURL: 'http://127.0.0.1:8081',  // 这里写当前前端的url，而且不能写localhost否则会出现跨域问题
    timeout: 3000,  //设置请求超时时间
    responseType: 'json',
    // withCredentials: true,  //是否允许带cookie这些，这个就不能打开否则一直出现跨域问题
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json;charset=utf-8',
    }
})

interface userInfo{  //对象类型的数据就不要给它标注类型为object了，专业一点，写个interface接口。
    code: number
    message: string
    token: string
}

//请求拦截器
const requestInterceptor = request.interceptors.request.use(
    //在发送请求之前调用
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {  //这个InternalAxiosRequestConfig是我百度出来的，以后遇到这种类型报错第一时间去百度
        const newConfig = config;
        //添加token
        // Object.assign({},newConfig.headers, { 'x-token': 'some-token' });
        // newConfig.headers = newConfig.headers || {};
        // newConfig.headers['Access-Control-Allow-Origin'] = '*';
        let userInfo:any = localStorage.getItem('userInfo')  //从localStorage里边提取登录时候存储的token。
        let userInfo_parse:userInfo = JSON.parse(userInfo)
        let token:string = '';
        if ( userInfo_parse ) {
            token = userInfo_parse.token;  //除了登录接口，调用其它接口如果请求头没有带上正确的token那么后端就会返回401（token失效）。
            // token = '';
        }
        newConfig.headers['Authorization'] = token;  //一般来说，token前面要拼接Bearer+空格
        return newConfig;
    },
    (error: AxiosError): Promise<never> => {
        //对请求错误时调用，可自己定义
        return Promise.reject(error)
    }
)

// 响应拦截器
const responseInterceptor = request.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        // 2xx 范围内的状态码都会触发该函数。对响数据成功时调用。
        //   console.log(response, '响应拦截器')
        
        return response;
    },
    (error: AxiosError): Promise<never> => {
        // 超出 2xx 范围的状态码都会触发该函数。对响应错误时调用。
        // console.log('请求错误: ', error);
        const { response } = error;
        if ( response ) {
            const { data, status } = response;
            if ( data==='token失效'&& status===401 ) {
                //说明token已过期了，清空localStorage，强制退出登录。
                localStorage.removeItem('userInfo')
                // //调用弹窗
                message(
                    '提示',
                    'token已过期，请重新登录',
                    '确认',
                    '取消'
                )
                //跳转到登录页
                router.push({ name: 'login' })
            }
        }
      
      return Promise.reject(error);
    }
  );

//移除请求拦截器
// request.interceptors.request.eject(requestInterceptor);

// 移除响应拦截器
// request.interceptors.response.eject(responseInterceptor);

// export default { requestInterceptor, responseInterceptor, request };
export default request;
