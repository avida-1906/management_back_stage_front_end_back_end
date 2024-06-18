<template>
    <div class="parent">
        <h1>我是父组件</h1>
        <h2>{{ data }}</h2>
        <child :get_data = data />
        <!-- 等同于传入 :disabled="true" -->
        <child disabled />
        <!-- 等同于传入 :disabled="false" -->
        <child />
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from '@/components/parent_transfer_to_child/child.vue'
    
    const data = ref()


</script>
    
<style scoped lang='css'>
    .parent {
        width: 100%;
        height: 100%;
        background: red;
    }
</style>

