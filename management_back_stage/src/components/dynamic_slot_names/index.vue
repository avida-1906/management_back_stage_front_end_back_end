<!-- 
    注意vue3的插槽template标签一定要写在子组件标签里边
    否则会报这样的错误：
    [vite] Internal server error: Codegen node is missing for element/if/for node. Apply appropriate transforms first.
-->

<template>
    <div>
        <h1>动态插槽名---Dynamic Slot Names</h1>
        <child>
            <template #[dynamic_name]>
                动态插槽名的内容
            </template>
        </child>
        
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from './child.vue'
    
    const dynamic_name = ref('xxx')

</script>
    
<style scoped lang='css'>
    
</style>

