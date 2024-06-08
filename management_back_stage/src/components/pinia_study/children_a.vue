<template>
    <div>
        <h1>我是子组件A</h1>
        <p>被批量修改的属性：{{ username }}</p>
        <p>解构出来的count:{{ count }}</p>
        <p>直接使用store.count:{{ store.count }}</p>
        <p>computed直接使用store.change_count:{{ store.change_count }}</p>
        <button @click="add_one">改变A组件的count值</button>
        <button @click="lot_change">批量修改store里边的属性</button>

    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useUserStore } from '@/stores/users.ts'

    const store = useUserStore()

    const {
        add_one,
        store_login,
        change_name,
        $reset

     } = store;  //store里边的function可以直接解构出来，不丢失响应性
    
    const {
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

    } = storeToRefs(store)  //store里边ref和computed里边的变量要通过storeToRefs工具来解构出来，从而保证它们的响应性

    function lot_change() {
        //使用$patch()来批量修改store里边的属性
        // 方式一：
        // store.$patch({
        //     count: 88,
        //     username: '张三丰'
        // })
        // 方式二：-----------------强烈推荐
        store.$patch( (state)=>{
            state.count = 108;
            state.username = '鬼脚七';
        } )
    }

</script>
    
<style scoped lang='css'>
    
</style>
