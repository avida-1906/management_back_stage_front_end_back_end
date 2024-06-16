<template>
    <div ref="mask" class="mask">
        <div class="loading_box">
            <p class="content">
                <img :src="loading_img" alt="图片不显示" width="50px;">
            </p>
            <p class="title">{{ props.title }}</p>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, onMounted } from 'vue'
    /* 
        在哪个组件使用img就要在哪个组件里边import图片，否则会出现src正常但就是图片的宽高为0
        想要把图片通过v-html的方式注入也是不行的，特别是src要从父组件那边传过来的情况
    */
    import loading_img from '@/assets/img/loader.gif'  

    const mask = ref<any>()

    // const { cancle_box_message, confirm_box_message } = close_box_message()
    //父组件在index.ts文件里边生成了，这个props在当前子组件接收参数
    const props = defineProps({
        title: { type: String, required: true },
        html_content: { type: String, required: true },
    })

    //给loading的父元素#mask添加宽高充满整个页面，再微调它的外边距使其完全在页面居中
    const handle_element_mask = ():void=> {
        let x = mask.value.style
        x.width = `${window.screen.width}px`
        x.height = `${window.screen.height}px`
        x.margin = `-${window.screen.height/2}px 0 0 -${window.screen.width/2}px`
        // x.width = `${window.innerWidth}px`
        // x.height = `${window.innerHeight}px`
        // x.margin = `-${window.innerHeight/2}px 0 0 -${window.innerWidth/2}px`
    }
    
    onMounted(()=>{
        handle_element_mask()        
    })
    
</script>
    
<style scoped lang='css'>
    .mask {
        position: absolute;
        top:50%;
        left:50%;
        background: gray;
    }
    .loading_box {
        width:100px;
        height:100px;
        border-radius:5%;
        position: absolute;
        top:50%;
        left:50%;
        margin: -50px 0 0 -50px;
        background:#3b3c3d;
        opacity:0.5;
        padding: 2% 2%;
    }
    .loading_box .title {
        /* border: 1px solid blue; */
        text-align: center;
        color: white;
        font-weight: bold;
        opacity:1;
    }
    .loading_box .content {
        /* border: 1px solid green; */
        text-align: center;
    }
    .loading_box .footer {
        display: flex;
        justify-content: space-between;
    }
</style>
