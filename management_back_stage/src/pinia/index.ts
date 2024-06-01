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
    arr:number[]
    isOk:boolean
}

/* 
    这是选项式（Optino Store）写法，state相当于vue2里边的data，getters相当于vue2里边的computed，actions相当于vue2里边的methods。
    命名规范：userXxxStore 前面use后面Store中间自定义
*/

//这是第一个store
export const useUserStore = defineStore( 'user', {  //第一个参数字符串'user'是ID，在Store应用中唯一
    state: ():user => {  //这是一个箭头函数，return出来我们需要的变量
        return {
            username: '123',
            userpassword: '456',
            count: 1,
            arr: [1,2,3,4,5],
            isOk: false
        }
    },
    /* 
        getters相当于组件里边的computed计算属性，
        里边的每一个函数都有一个形参state，而且还要有return，
        每个函数都是普通函数，没有function关键字，并且标注返回值类型。
        每个函数都可以访问其他store里边的getter
    */
    getters: {  //这是一个对象
        change_count( state ):number {  //普通函数，没有function返回值
            return state.count * 2;
        },
        change_count_plus_one():number {  //普通函数，没有function返回值
            return this.change_count+1;  //这个this指向getters这个对象
        },
        get_count( state ) {  //给getter传参x，在tamplate里边调用该函数的时候给它传值就行了。
            return (x:any) => {
                console.log(x)
                return state.arr.find((item) => item === x)
            }
        }    
    },
    /* 
        actions相当于vue2里边的methods属性，里边放的都是业务逻辑相关的函数，
        每个函数都可以通过this来访问整个store实例。
        每个函数都可以访问其他store里边的action。
        每个函数都可以有异步操作。
    */
    actions: {  //这是一个对象
        double_count() {
            console.log('调用了')
            this.count++;
        }
    }
} )

//还有共享action/共享getter和嵌套store的使用说明


/* 
    这是组合式（Setup Store）写法，
*/