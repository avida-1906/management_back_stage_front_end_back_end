import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  //引入向外暴露的router对象
import PrimeVueStyled from 'primevue/styled';
import { createPinia } from 'pinia'  //引入pinia模块
import VueLazyLoad from 'vue3-lazy'
// import VueLazyComponent from '@xunlei/vue-lazy-component'

const pinia = createPinia()  //调用构造函数生成pinia对象

const app = createApp(App)

//配置接口根地址
// axios.defaults.baseURL = 'http://localhost:3000'
//把axios挂载到全局
// app.config.globalProperties.axios = axios
app.use(PrimeVueStyled as any);  //不写as any 的话会报错  这是类型断言

app.use(router)  //挂载router对象 这个文件里边关于路由就两句话

app.use(pinia)  //挂载pinia到vue实例

// app.use(Lazyload, {  //挂载Lazyload到vue实例
//     loading: "@/assets/img/2ea4ba18feab7374f5d2d0c18a6a71b9.jpg",//可以指定加载中的图像
//     error: "@/assets/img/images.png",//可以指定加载失败的图像
// })

app.use(VueLazyLoad, {
    loading: '@/assets/img/default.png', // 图片加载时默认图片
    error: '@/assets/img/error.png' // 图片加载失败时默认图片
})

app.mount('#app')  //这一行永远啊写在最后面
