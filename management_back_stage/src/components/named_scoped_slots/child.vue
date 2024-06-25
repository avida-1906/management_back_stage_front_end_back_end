<template>
    <div>
        <h1>我是子组件</h1>
        <div class="header">
            <slot name="header" :text="'张三你好'"></slot>
        </div>
        <div class="main">
            <!-- 这里省略了name="default" -->
            <slot :count="10086"></slot>
        </div>
        <div class="footer">
            <slot name="footer" :state="true"></slot>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    .header {
        background: red;
    }
    .main {
        background: blue;
    }
    .footer {
        background: yellow;
    }
</style>
