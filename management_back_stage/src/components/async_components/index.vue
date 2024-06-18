<template>
    <div>
        <h1>异步组件学习</h1>
        <button @click="load_com">加载</button>
        <comp v-if="is_show" class="async_com"/>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, defineAsyncComponent } from 'vue'
    // import comp from './child.vue'

    /* 
        使用vue3的异步组件，会导致按需导入或者叫动态导入，这样就可以加快首屏加载的时间，达到优化的目的。
        引入defineAsyncComponent这个函数，在它里边用箭头函数来加载指定要按需加载的异步组件。
        补充一点：当箭头函数里边只有一行代码的时候，而且又有返回值，花括号{}可以不写，不写花括号的话return一定不能写。
    */
    const comp = defineAsyncComponent( ()=> import('./child.vue') )
    
    const a = (b:number) => b = 0
    
    const is_show = ref(false)

    const load_com = () => {
        is_show.value = true;
    }
    
</script>
    
<style scoped lang='css'>
    .async_com {
        width: 500px;
        height: 500px;
        background: red;
    }
</style>
