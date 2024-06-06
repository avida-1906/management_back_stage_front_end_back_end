    /* 
        这是接口文件，所有的接口和要发的请求都写在这里。
    */
    
    import request from '@/utlis/axios'

    // axios.defaults.baseURL = ' http://localhost:8081';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    //登录接口
    export const api_login_get = ( url:any )=>{  //这里面不需要写async和await
        return request.get( url.value )
    }
    //商品列表接口
    export const api_get_product_list = ( url:any )=>{  //这里面不需要写async和await
        return request.get( url.value )
    }