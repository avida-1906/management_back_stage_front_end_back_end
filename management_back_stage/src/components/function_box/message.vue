<template>
    <div ref="function_box" class="function_box">
        <p class="title">
            标题---{{ props.title }}
            <svg @click="handle_cancel" t="1716886536478" class="icon" viewBox="0 0 1032 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2633" width="25"><path d="M1030.684117 99.248826L933.322749 1.887458 519.000581 416.208367 104.677155 1.887458 7.315787 99.248826 422.199159 513.00979 7.315787 927.890645l96.109354 96.109355L519.000581 609.549485l415.57544 414.450515 96.108096-96.109355L615.802004 513.00979z" fill="#2c2c2c" p-id="2634"></path></svg>
        </p>
        <p class="content">内容---{{ props.content }}</p>
        <p class="footer">
            <button @click="handle_ok">{{ props.confirm_text }}</button>
            <button @click="handle_cancel">{{ props.cancel_text }}</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, defineProps, onMounted } from 'vue'
    import { close_box_message } from '../function_box'
    
    const { cancle_box_message, confirm_box_message } = close_box_message()

    //父组件在index.ts文件里边生成了，这个props在当前子组件接收参数
    const props = defineProps({
        title: { type: String, required: true },
        content: { type: String, required: true },
        confirm_text: { type: String, required: true },
        cancel_text: { type: String, required: true },
    })

    //点击确认按钮
    const handle_ok = ()=>{
        confirm_box_message()
    }
    //点击取消或者交叉按钮
    const handle_cancel = ()=>{
        cancle_box_message()
    }
    
    const function_box = ref<any>()
    
    const handle_element = ()=>{
        if ( function_box.value ) {
            let a = function_box.value.style.width
            let b = function_box.value.style.height
            function_box.value.style.margin = `-${b}px 0 0 -${a/2}px`
        }
    }

    onMounted(()=>{
        handle_element()  //组件挂载的时候给它微调居中
    })

</script>
    
<style scoped lang='css'>
    .function_box {
        border:1px solid red;
        background: rgb(0, 0, 0);
        /* background:rgb(255, 252, 252); */
        padding: 0 2%;
    }
    .function_box .title {
        border: 1px solid blue;
    }
    .function_box .title .icon {
        float:right;
        cursor: pointer;
    }
    .function_box .content {
        border: 1px solid green;
    }
    .function_box .footer {
        display: flex;
        justify-content: space-between;
    }
</style>
