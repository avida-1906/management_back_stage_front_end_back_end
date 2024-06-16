<!-- 
    Unchecked runtime.lastError: The message port closed before a response was received.
    出现这个报错的原因是浏览器里边的迅雷插件有问题。
    这个问题会导致页面登录成功后无法跳转到首页。
-->

<template>
    <div>
        <p>这是登陆页</p>
        <p>
            <button @click="show_form">点击登录</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { form_box } from '@/components/function_box/'
    
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
