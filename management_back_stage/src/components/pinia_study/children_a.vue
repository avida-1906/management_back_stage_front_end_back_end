<template>
    <div>
        <h1>我是子组件A</h1>
        <div>
            {{ count }}
        </div>
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

</script>
    
<style scoped lang='css'>
    
</style>
