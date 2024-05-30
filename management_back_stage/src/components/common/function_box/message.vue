<template>
    <div class="function_box">
        <p class="title">标题---{{ props.title }}</p>
        <p class="content">内容---{{ props.content }}</p>
        <p class="footer">
            <button @click="handle_ok">{{ props.confirm_text }}</button>
            <button @click="handle_cancle">{{ props.cancel_text }}</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { defineProps } from 'vue'
    import { close_box_message } from '../function_box'

    const { cancle_box_message, confirm_box_message } = close_box_message()
    const props = defineProps({
        title: { type: String, required: true },
        content: { type: String, required: true },
        confirm_text: { type: String, required: true },
        cancel_text: { type: String, required: true },
    })
    // console.log( props )

    //点击确认按钮
    const handle_ok = ()=>{
        confirm_box_message()
    }
    //点击取消或者交叉按钮
    const handle_cancle = ()=>{
        cancle_box_message()
    }
</script>
    
<style scoped lang='css'>
    .function_box {
        width:300px;
        border:1px solid red;
        position: absolute;
        top:20%;
        left:30%;
        background:gray;
        padding: 0 2%;
    }
    .function_box .title {
        border: 1px solid blue;
    }
    .function_box .content {
        border: 1px solid green;
    }
    .function_box .footer {
        display: flex;
        justify-content: space-between;
    }
</style>
