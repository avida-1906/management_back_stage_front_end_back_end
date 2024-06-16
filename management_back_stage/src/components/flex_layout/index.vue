<template>
    <h3>利用弹性布局让div在页面居中</h3>
    <h4>需求：写一个红色背景的div，嵌套一个蓝色背景的div，用弹性布局让蓝色的div在红色div里边水平、垂直居中</h4>
    <h4>关键是父元素的这两行代码：justify-content: center; align-items: center;</h4>
        
    <div class="parent">
        <div class="children"></div>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    .parent {
        width: 100%;
        height: 700px;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .children {
        width: 20%;
        height: 20%;
        background: blue;
    }
</style>
