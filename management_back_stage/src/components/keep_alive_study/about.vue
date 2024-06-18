<template>
    <div class="about">
        <p>我是关于</p>
        <input type="text">
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, onUnmounted } from 'vue'
    onUnmounted( ()=>{
        console.log('组件about卸载了')
    } )
</script>
    
<style scoped lang='css'>
    .about {
        width: 50%;
        height: 300px;
        background: yellow;
    }
</style>
