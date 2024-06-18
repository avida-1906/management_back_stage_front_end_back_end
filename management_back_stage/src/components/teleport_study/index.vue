<template>
    <button @click="is_show = true">弹窗</button>
    
    <Teleport to="body">
        <div class="modal" v-if="is_show">
            <h1>我是弹窗</h1>
            <button @click="is_show = false">关闭</button>
        </div>
    </Teleport>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'

    const is_show = ref(false)

</script>
    
<style scoped lang='css'>
    .modal {
        width: 100%;
        height: 100%;
        background: red;
        /* margin: 0 auto; */
        /* float: left; */
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -83px 0 0 -724px;
        z-index: 999;
    }
</style>
