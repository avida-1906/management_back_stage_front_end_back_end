<template>
    <div>
        <h1>默认插槽学习</h1>
        <!-- 没有提供任何内容给插槽 -->
        <FancyButton>

        </FancyButton>
        <!-- 传递文本内容 -->
        <FancyButton>
            父组件传过去的内容--通过slot标签展示
        </FancyButton>

        <!-- 除了传文本内容还可以传template片段 -->
        <FancyButton>
            <span>click me!!!!</span>
            <image_fragment></image_fragment>
        </FancyButton>

    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import FancyButton from '@/components/default_slots/fancy_button.vue'
    import image_fragment from '@/components/default_slots/image_fragment.vue'
    
</script>
    
<style scoped lang='css'>
    
</style>
