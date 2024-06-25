<template>
    <div>
        <h1>子组件</h1>
        <slot :text="msg" :count="10086">

        </slot>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
    const msg = ref('张三你好')


</script>
    
<style scoped lang='css'>
    
</style>
