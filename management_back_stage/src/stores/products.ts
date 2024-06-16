/* 
    这是组合式（Setup Store）写法，
*/


import { defineStore } from "pinia";
import { api_get_product_list } from '@/api/request'
import { ref } from 'vue'

export const useProductStore = defineStore('product_id', ()=>{
    // 很多时候编辑器报错是因为没有给对象定义接口
    interface product_item {
        id: number
        product_name: string
        price: string
    }
    let arr = ref<product_item []>([])  //vue3+ts语法：用ref来声明一个对象数组，默认值为空数组，对象里边的属性在接口product_item里边体现
    async function store_get_product_list( url:object ) {
        /* 
            以后看见这种有await的异步代码最好用try catch 包裹起来，否则容易报错：
            [Vue warn]: Unhandled error during execution of native event handler 
                at <Index onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< Proxy(Object) {__v_skip: true} > > 
                at <RouterView> 
                at <App>
        */
        try {
            type AxiosResponse = any  //这句话我是在编辑器提示里边抄的，以后遇到这种报错就可以在提示里边抄，实在不行就any
            let res:AxiosResponse;
            res = await api_get_product_list( url )
            const { data } = res;
            console.log(data)
            arr.value = data
            console.log(arr.value)
        } catch (e) {
            console.log(e, 'store-products-acthions-store_get_product_list--catch:401token过期---异步函数记得要加try catch')
        }
    }
    return { arr, store_get_product_list }
})

