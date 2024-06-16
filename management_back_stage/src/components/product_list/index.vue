<template>
    <div>
        <my_headerheader/>
        <h1>这是商品列表页</h1>
        <p>测试一下登录成功之后能不能让请求拦截器设置token</p>
        <div class="product_list_parent">
            <ul class="product_list">
                <template >
                    <!-- 
                        这个arr定义的时候有讲究，一定要用vue3+TS的方式去定义它，
                        let arr = ref<product_item []>([])
                        并且要定义一个接口来product_item描述这个数组里边的对象，
                        这样，这里的v-for就不会出现 类型“XXX”上不存在属性“product_name”。
                    -->
                    <li v-for="item in arr" :key="item.id">{{ item.product_name }}</li>
                </template>
            </ul>
            
        </div>
        <button @click="api_get_product_list()">点击获取列表</button>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useProductStore } from '@/stores/products'
    import my_headerheader from '@/components/common/header/index.vue'  //引入组件，不要使用解构

    const store = useProductStore()
    const { store_get_product_list } = store  //actions里边的方法可以直接解构
    const { arr } = storeToRefs(store)

    const url = ref<string>('')
    async function api_get_product_list() {
        
        url.value = '/product_list'
        await store_get_product_list( url )
        
    }
    
</script>
    
<style scoped lang='css'>
    .product_list_parent {
        max-width: 25%;
        margin: 0 auto;
    }
    .product_list {
        padding: 0;
        list-style-type: none;
    }
    .product_list li {
        border-bottom: 1px solid red;
    }
</style>
