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
    arr:string[]
    isOk:boolean
}

/* 
    这是选项式（Optino Store）写法，state相当于vue2里边的data，getters相当于vue2里边的computed，actions相当于vue2里边的methods。
    命名规范：userXxxStore 前面use后面Store中间自定义
*/

//这是第一个store
export const useUserStore = defineStore( 'user', {  //第一个参数字符串'user'是ID，在Store应用中唯一
    state: ():user => {
        return {
            username: '123',
            userpassword: '456',
            count: 1,
            arr: [],
            isOk: false
        }
    },
    /* 
        getters相当于组件里边的computed计算属性，
        里边的每一个函数都有一个形参state，而且还要有return，
        每个函数都是箭头函数，并且标注返回值类型

    */
    getters: {
        change_count: ( state ):number => {
            return state.count++;
        },
        change_count_plus_one: ():number => {
            return this.change_count+1;
        }
    },
    actions: {
        double_count() {
            console.log('调用了')
            this.count * 2;
        }
    }
} )


/* 
    这是组合式（Setup Store）写法，
*/