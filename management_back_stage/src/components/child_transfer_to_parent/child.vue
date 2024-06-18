<template>
    <div class="child">
        <h1>我是子组件</h1>
        <h2>{{ data }}</h2>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
    const data = ref('来自子组件的数据---你好世界')  //定义要发送给父组件的数据
    const emit = defineEmits(['send_data'])  //在子组件这边定义一些事件，将来在父组件那边触发
    emit('send_data',data.value)  //发送对应的事件连带数据

</script>
    
<style scoped lang='css'>
    .child {
        width: 20%;
        height: 20%;
        background: blue;
    }
</style>
