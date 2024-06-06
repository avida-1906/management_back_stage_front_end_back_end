/* 
    这是组合式（Setup Store）写法，
*/


import { defineStore } from "pinia";
import { api_get_product_list } from '@/api/request'
import { ref } from 'vue'

export const useProductStore = defineStore('product_id', ()=>{
    let arr = ref([{name:'张三'}])
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

