<template>
    <div>
        <h1>named slots 具名插槽的学习</h1>
        <BaseLayout>
            <!-- 具名插槽里边的东西要用tamplate包裹起来，默认插槽可以不用 -->
            <template v-slot:header>  <!-- v-slot:xxx 指向对面子组件对应的name="xxx"，注意冒号两边不能有空格 -->
                <h1>我是具名插槽header里边的内容</h1>
            </template>

            <template #main>  <!-- #main 等价于 v-slot:main -->
                <h1>我是具名插槽main里边的内容</h1>
            </template>

            <template #default>  <!-- 其实默认插槽这一层template标签是可以省略的 -->
                <h1>我是默认插槽footer里边的内容</h1>
            </template>

        </BaseLayout>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import BaseLayout from './BaseLayout.vue'
</script>
    
<style scoped lang='css'>
    
</style>
