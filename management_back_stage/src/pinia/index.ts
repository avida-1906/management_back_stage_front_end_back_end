// import { createApp } from "vue";
// import { createPinia } from 'pinia'
// import App from '../App.vue'

// const pinia = createPinia()

// const app = createApp(App)

// app.use(pinia)
// app.mount('#app')


import { defineStore } from "pinia";

interface user {
    username:string
    userpassword:string
    count:number
}

/* 
    这是选项式（Optino Store）写法，state相当于vue2里边的data，getters相当于vue2里边的computed，actions相当于vue2里边的methods。
    命名规范：userXxxStore 前面use后面Store中间自定义
*/

//这是第一个store
export const useUserStore = defineStore( 'user', {  //第一个参数字符串'user'是ID，在Store应用中唯一
    state: ():user => ({
        username: '',
        userpassword: '',
        count: 1
    }),
    getters: {
        change_count: ( state )=>{
            return state.count++;
        } 
    },
    actions: {
        
        double_count() {
            this.count * 2;
        }
    }
} )


/* 
    这是组合式（Setup Store）写法，
*/