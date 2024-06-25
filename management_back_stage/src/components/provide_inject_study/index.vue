<!-- 
    依赖注入很简单，但是你不自己动手搞一遍，把坑踩一遍，你就不能完全掌握这个东西。
    等到真正做项目的时候会很绝望的。
    如果要传递的数据具备响应式，声明的时候一定要使用ref。
-->

<template>
    <div class="first">
        <h1>依赖注入学习</h1>
        <input type="text" v-model="data">
        <second_child/>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, provide, readonly } from 'vue'
    import second_child from './second_child.vue'

    const data =  ref()  //定义一个要注入到其它组件的响应式变量，注意一定要用ref
    //这里传的data变量你不能用.value给它解包，否则会丢失响应式。
    //如果你希望实现单向数据流，注入方不允许修改数据，那就用readonly()这个方法把数据包裹起来。
    provide('parent_data',data)


</script>
    
<style scoped lang='css'>
    .first {
        width: 500px;
        height: 700px;
        background: red;
    }
</style>
