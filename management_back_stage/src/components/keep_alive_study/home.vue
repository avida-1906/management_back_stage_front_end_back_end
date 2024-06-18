<template>
    <div class="home">
        <p>我是首页</p>
        <input type="text">
    </div>
</template>
    
<script setup lang='ts'>
    import { onUnmounted, ref } from 'vue'
    onUnmounted( ()=>{
        console.log('组件home卸载了')
    } )
</script>
    
<style scoped lang='css'>
    .home {
        width: 50%;
        height: 300px;
        background: blue;
    }
</style>
