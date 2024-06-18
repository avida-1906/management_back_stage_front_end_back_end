<template>
    <div class="second">
        <third_child/>
    </div>
</template>
    
<script setup lang='ts'>
    import { provide, ref } from 'vue'
    import third_child from './third_child.vue'

    

</script>
    
<style scoped lang='css'>
    .second {
        width: 400px;
        height: 400px;
        background: blue;
    }
</style>
