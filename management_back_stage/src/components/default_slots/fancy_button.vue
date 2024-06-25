<template>
    <div>
        <button>
            <slot>
                这是默认内容 <!-- 这是写在<slot></slot>标签中间的默认内容 -->
            </slot> 
        </button>
    </div>
</template>
    
<script setup lang='ts'>
   import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    
</style>
