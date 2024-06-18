<template>
    <Transition name="slide-fade" mode="out-in" appear>
        <div class="modal">
            <h1>我是弹窗</h1>
        </div>   
    </Transition>
    
</template>
    
<script setup lang='ts'>
   import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    .modal {
        width: 200px;
        height: 200px;
        background: blue;
        position: absolute;
    }
</style>
