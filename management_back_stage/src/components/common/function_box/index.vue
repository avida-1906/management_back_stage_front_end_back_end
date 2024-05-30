<template>
    <div>
        <p>
            <button @click="show_box">弹窗</button>
            <button @click="show_form">form表单弹窗</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { message } from './index.ts'
    import { form_box } from './index.ts'
    
    const show_box = ()=>{
        message( 
            '弹窗标题',
            '内容', 
            '确定', 
            '取消'
        )
    }
    const show_form = ()=>{
        form_box( 
            '弹窗标题',
            '内容', 
            '提交', 
            '取消'
        )
    }
    
</script>
    
<style scoped lang='css'>
    
</style>
