<template>
    <div class="third">
        <input type="text" v-model="nihao">
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, inject } from 'vue'
    
    const nihao = inject('parent_data')  //依赖注入的时候只需要写上provide的第一个参数即可。


</script>
    
<style scoped lang='css'>
    .third {
        width: 300px;
        height: 300px;
        background: yellow;
    }
</style>
