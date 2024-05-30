<template>
    <div class="tanchuang">
        <p>标题---{{ props.title }}</p>
        <p>内容---{{ props.content }}</p>
        <p>
            <button @click="queding()">确定</button>
            <button>取消</button>
        </p>
    </div>
</template>
    
<script setup>
    import { ref, defineProps } from 'vue'

    const props = defineProps({
        title: { type: String, required: true },
        content: { type: String, required: true }
    })
    const title = ref()
    const content = ref()

    const queding = () => {
        
    }
</script>
    
<style scoped lang='css'>
    .tanchuang {
        border: 1px solid red;
    }
</style>

