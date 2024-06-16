<template>
    <div>
        <p>研究一下弹窗</p>
        <button @click="tanchuang()">点击就可以弹出来</button>
    </div>
</template>

<script setup lang="ts">
    import { pop_up } from './index'

    const tanchuang = () => {
        pop_up('弹窗标题','弹窗内容区域',2000)
    }
</script>