<template>
    <div>
        <h1>子组件</h1>
        <div>
            <slot name="xxx"></slot>
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
