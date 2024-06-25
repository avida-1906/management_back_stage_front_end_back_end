<!-- 
    作用域插槽的作用就是子组件给父组件传值，
    父组件：在挂载子组件标签的地方写上v-slot="xxx"，
    子组件：在slot标签里边写上 :yyy="当前组件的一个全局变量或则JS表达式"，
    在父组件里边使用插值表达式{{ xxx.yyy }} 就可以访问子组件传过来的变量了。
-->

<template>
    <div>
        <h2>学习作用域插槽---scope slots</h2>
        <!-- 注意这里是 = -->
        <!-- <child v-slot="receive">
            {{ receive }}
        </child> -->

        <!-- 还有一种写法---解构 -->
        <child  v-slot="{ text, count }">
            {{ text }}  {{ count }}
        </child>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from './child.vue'
    

</script>
    
<style scoped lang='css'>
    
</style>
