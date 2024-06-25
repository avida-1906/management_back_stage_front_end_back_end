<template>
    <div>
        <h1>学习条件插槽---conditional slots</h1>
        <child>
            <template v-slot:header>
                header
            </template>
            <template #main>
                main
            </template>
            <template #default>
                footer
            </template>
        </child>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from './child.vue'
</script>
    
<style scoped lang='css'>
    
</style>

