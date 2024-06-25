<template>
    <div class="child">
        <h1>我是子组件</h1>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <slot name="main"></slot>
        </main>
        <footer class="footer">
            <slot></slot> <!-- 这里使用的是默认插槽 -->>
        </footer>
    </div>
</template>
    
<script setup lang='ts'>
   import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    .child {
        background: red;
    }
    .header, .main, .footer {
        background: blue;
        width: 60%;
        margin: 0 auto;
    }
</style>
