// import { createApp } from "vue";
// import { createPinia } from 'pinia'
// import App from '../App.vue'

// const pinia = createPinia()

// const app = createApp(App)

// app.use(pinia)
// app.mount('#app')


import { defineStore } from "pinia";
import { api_login_get } from '@/api/request'
import { ref, computed } from 'vue'

// interface user {
//     username:string
//     userpassword:string
//     count:number
//     arr:number[]
//     isOk:boolean
//     is_login:boolean | null
//     token: string
// }

/* 
    这是选项式（Optino Store）写法，state相当于vue2里边的data，getters相当于vue2里边的computed，actions相当于vue2里边的methods。
    命名规范：userXxxStore 前面use后面Store中间自定义
*/

//这是第一个store
// export const useUserStore = defineStore( 'user_id', {  //第一个参数字符串'user'是ID，在Store应用中唯一
//     state: ():user => {  //这是一个箭头函数，return出来我们需要的变量
//         return {
//             username: '123',
//             userpassword: '456',
//             count: 1,
//             arr: [1,2,3,4,5],
//             isOk: false,
//             is_login: null,
//             token: ''
//         }
//     },
//     /* 
//         getters相当于组件里边的computed计算属性，
//         里边的每一个函数都有一个形参state，而且还要有return，
//         每个函数都是普通函数，没有function关键字，并且标注返回值类型。
//         每个函数都可以访问其他store里边的getter
//     */
//     getters: {  //这是一个对象
//         change_count( state ):number {  //普通函数，没有function返回值
//             return state.count * 2;
//         },
//         change_count_plus_one():number {  //普通函数，没有function返回值
//             return this.change_count+1;  //这个this指向getters这个对象
//         },
//         get_count( state ) {  //给getter传参x，在tamplate里边调用该函数的时候给它传值就行了。
//             return (x:any) => {
//                 // console.log(x)
//                 return state.arr.find((item) => item === x)
//             }
//         },
//         change_login_status( state ) {
//             return state.is_login = true;
//         },
//     },
//     /* 
//         actions相当于vue2里边的methods属性，里边放的都是业务逻辑相关的函数，
//         每个函数都可以通过this来访问整个store实例。
//         每个函数都可以访问其他store里边的action。
//         每个函数都可以有异步操作。
//     */
//     actions: {  //这是一个对象
//         add_one() {
//             // console.log('调用了')
//             this.count++;
//         },
//         //可以在这里调登录接口---以后都要通过stroe的actions来调登录接口
//         async store_login( url:object ) {
//             type AxiosResponse = any  //这句话我是在编辑器提示里边抄的，以后遇到这种报错就可以在提示里边抄，实在不行就any
//             let res:AxiosResponse;
//             res = await api_login_get( url )
//             const { data } = res;
//             // console.log(data)
//             const { token } = data;
//             //登陆成功了要把用户名密码存到loaclStorage里边
//             //localStorage里边的value只能存JSON字符串
//             localStorage.setItem( 'userInfo', JSON.stringify(data) )
//             // console.log(localStorage.getItem('userInfo'))
//             this.token = token;
//             return res
//         },
//     }
// } )

//还有共享action/共享getter和嵌套store的使用说明


/* 
    这是组合式（Setup Store）写法，
*/
export const useUserStore = defineStore( 'user_id', ()=>{
    //这些是ref（state）
    const username = ref('王五')
    const userpassword = ref('456')
    const count = ref(1)
    const arr = ref([1,2,3,4,5])
    const isOk = ref(false)
    const is_login = ref<boolean>()
    const _token = ref<string>()

    //这些是computed（getters）
    const change_count = computed(()=>{
        return count.value * 2;
    })
    const change_count_plus_one = computed( ()=>{
        return count.value * 2 + 1;
    } )
    const get_count = computed( ()=>{
        return (x:any) => {
            console.log(x)
            return arr.value.find((item) => item === x)
        }
    } )
    const change_login_status = computed( ()=>{
        return is_login.value = true;
    } )
    // const change_name = computed( ()=>{
    //     username.value = '张三'
    // } )

    //这些是function（actions）
    function add_one() {
        count.value++;
    }
    async function store_login( url:object ) {
        type AxiosResponse = any  //这句话我是在编辑器提示里边抄的，以后遇到这种报错就可以在提示里边抄，实在不行就any
        let res:AxiosResponse;
        res = await api_login_get( url )
        const { data } = res;
        // console.log(data)
        const { token } = data;
        //登陆成功了要把用户名密码存到loaclStorage里边
        //localStorage里边的value只能存JSON字符串
        localStorage.setItem( 'userInfo', JSON.stringify(data) )
        // console.log(localStorage.getItem('userInfo'))
        _token.value = token;  //两个变量名不能一样
        return res
    }
    function change_name() {
        
        username.value = '张三'
    }
    //创建一个重置state的函数$reset()
    function $reset() {
        console.log('我被调用了')
        count.value = 1;
    }

    return {
        //不管是state/getters变量还是actions里边的函数都要在这里return出来
        count,
        username, 
        userpassword, 
        arr, 
        isOk, 
        _token, 
        change_count, 
        change_count_plus_one, 
        get_count, 
        change_login_status,
        add_one,
        store_login,
        change_name,
        $reset
    }
} )