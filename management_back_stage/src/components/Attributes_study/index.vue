<template>
    <div class="parent_class">
        <h1>研究Attributes透传</h1>
        <!-- 透传就是直接在挂载子组件的标签上写class，这个class会直接被带到子组件里边 -->
        <child class="parent_class"/>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from './child.vue'
</script>
    
<style scoped lang='css'>
    .container {
        border: 1px solid red;
    }
    .parent_class {
        background: red;
        width: 300px;
        height: 300px;
    }
</style>
