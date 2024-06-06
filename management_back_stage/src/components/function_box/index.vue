<template>
    <div>
        <my_headerheader/>
        <p>
            <button @click="show_box">弹窗</button>
            <button @click="show_form">form表单弹窗</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { message } from './index.ts'
    import { form_box } from './index.ts'
    import my_headerheader from '@/components/common/header/index.vue'  //引入公共头部
    
    //打开确认提示框
    const show_box = ()=>{
        message( 
            '弹窗标题',
            '内容', 
            '确定', 
            '取消'
        )
    }
    //打开表单弹窗
    const show_form = ()=>{
        form_box( 
            '弹窗标题',
            '提交'
        )
    }
    
</script>
    
<style scoped lang='css'>
    
</style>
