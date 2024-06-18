<template>
    <h1>Transition内置组件学习</h1>
    <button @click="is_show = true">走起</button>
    <Transition>
        <div class="box" v-if="is_show"></div>
    </Transition>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
    const is_show = ref(false)

</script>
    
<style scoped lang='css'>
    .box {
        width: 200px;
        height: 200px;
        background: red;
    }
    
    /* Transition内置组件一定要搭配下面这套样式来使用 */
    .v-enter-active,
    .v-leave-active {
        transition: opacity 2s linear;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>

