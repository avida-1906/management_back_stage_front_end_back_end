<template>
    <div>
        <my_headerheader/>
        <p>
            <button @click="show_box">弹窗</button>
            <button @click="show_form">form表单弹窗</button>
            <button @click="show_everyday_box">每日弹窗</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { storeToRefs } from 'pinia'
    import { message } from './index.ts'
    import { form_box } from './index.ts'
    import { everyday_box } from './index.ts'
    import my_headerheader from '@/components/common/header/index.vue'  //引入公共头部
    import { useUserStore } from '@/stores/users.ts'

    
    const store = useUserStore()
    const { change_is_check } = storeToRefs(store)

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

    //打开每日弹窗
    const show_everyday_box = ()=>{
        everyday_box( 
            '弹窗标题',
            '内容',
            '确定',
            '取消'
        )
    }
    
    /* 
        先让它一分钟弹一次
        如果弹窗没有关闭，定时器下一个周期弹窗的时候控制台会发这个警告：
        [Vue warn]: There is already an app instance mounted on the host container.
        If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.
    */
    let timer = setInterval( ()=> {
        show_everyday_box()
    } , 6000)

    console.log(change_is_check.value)
    if ( change_is_check.value ) {
        clearInterval(timer)
    }

</script>
    
<style scoped lang='css'>
    
</style>
