<template>
    <div>
        <!-- <h1>pinia学习</h1>
        <p>{{ username }}</p>
        <p>store里边的ref---count:{{ count }}</p>
        <p>store里边的computed---change_count:{{ change_count }}</p>
        <button @click="add_one">改变count---store里边的function---add_one</button>
        <br>
        <button @click="$reset">重置state里边的某个变量---store里边的function---$reset</button>
        <br> -->
        <children_A/>
        <children_B/>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import children_A from '@/components/pinia_study/children_a.vue'
    import children_B from '@/components/pinia_study/children_b.vue'

    /* 
        从Pinia里边解构出storeToRefs这个工具
    */
    import { storeToRefs } from 'pinia';

    /* 
        stores文件夹中有很多个ts文件，每个文件都导出一个变量，一般以useXxxStore命名
        解构出stores中users.ts文件中导出的唯一变量
    */
    import { useUserStore } from '@/stores/users'
    
    /* 
        导出的那个useXxxStore变量是个函数，调用它，
        然后一般声明一个变量store来存储它
    */
    const store = useUserStore()

    /* 
        把store里边actions（function）定义的函数解构出来
    */
    const { 
        add_one,
        store_login,
        change_name,
        $reset

    } = store;

    /* 
        把store里边state（ref）/getters（computed）里边的变量解构出来
    */
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

    } = storeToRefs(store)



</script>
    
<style scoped lang='css'>
    
</style>
