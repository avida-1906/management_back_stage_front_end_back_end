import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  //引入向外暴露的router对象
import PrimeVueStyled from 'primevue/styled';
import { createPinia } from 'pinia'  //引入pinia模块

const pinia = createPinia()  //调用构造函数生成pinia对象

const app = createApp(App)

//配置接口根地址
// axios.defaults.baseURL = 'http://localhost:3000'
//把axios挂载到全局
// app.config.globalProperties.axios = axios
app.use(PrimeVueStyled);

app.use(router)  //挂载router对象 这个文件里边关于路由就两句话

app.use(pinia)  //挂载pinia到vue实例

app.mount('#app')  //这一行永远啊写在最后面
