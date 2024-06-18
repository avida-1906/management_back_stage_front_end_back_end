<template>
    <div class="parent">
        <h1>子组件给父组件传值</h1>
        <h2>我是父组件</h2>
        <h2>{{ get_data }}</h2>
        <child @send_data="receive"/>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import child from './child.vue'

    let get_data = ref()
    const receive = ( x:string ) => {
        get_data.value = x
    }

</script>
    
<style scoped lang='css'>
    .parent {
        width: 100%;
        height: 100%;
        background: red;
    }
</style>
