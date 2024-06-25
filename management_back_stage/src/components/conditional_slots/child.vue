<template>
    <div>
        <h1>子组件</h1>
        <div class="header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="main" v-if="$slots.main">
            <slot name="main"></slot>
        </div>
        <div class="footer" v-if="$slots.default">
            <slot></slot>
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
