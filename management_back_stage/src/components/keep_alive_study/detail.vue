<template>
    <div class="detail">
        <p>我是详情页</p>
        <input type="text">
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, onUnmounted } from 'vue'
    onUnmounted( ()=>{
        console.log('组件detail卸载了')
    } )
</script>
    
<style scoped lang='css'>
    .detail {
        width: 50%;
        height: 300px;
        background: red;
    }
</style>
