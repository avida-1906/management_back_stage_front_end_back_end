<template>
    <div class="container">
        <h1>{{ props.title }}</h1>
        <p>{{ props.content }}</p>
        <p>
            {{ is_check }}
            <!-- 这里必须要绑定click事件，否则会出现第一次勾选没法触发函数的现象 -->
            <input id="xuanzhong" type="checkbox" v-model="is_check" @change="change_value">不再弹窗
        </p>
        <p>
            <button @click="confirm_click">{{ props.confirm_text }}</button>
            <button @click="cancel_click">{{ props.cancel_text }}</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { onMounted, ref } from 'vue'
    import { close_box_everyday_box } from '../function_box'
    import { storeToRefs } from 'pinia'
    import { useTanchuangStore } from '@/stores/tanchuang';
    
    const store = useTanchuangStore()
    const { xxx } =  storeToRefs(store)
    console.log(xxx)
    const { cancle_everyday_box, confirm_everyday_box } = close_box_everyday_box()  //关闭窗口要用到的方法

    const props = defineProps({
        /* 这些props必须要跟父组件那边传过来的一样 */
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        confirm_text: {
            type: String,
            default: ''
        },
        cancel_text: {
            type: String,
            default: ''
        }
    })

    const confirm_click = ()=> {
        if ( is_check.value ) {  //打钩
            addObj()
            console.log('勾选')
        } else {  //取消
            removeObj
            console.log('取消勾选')
        }
        confirm_everyday_box()
    }
    const cancel_click = ()=> {
        cancle_everyday_box()
    }

    /* 
        这里再写一个逻辑，就是判断is_check还有is_login，如果都为true今天就不能再弹窗了。
        当过了凌晨12点整，这个is_check又改为false，用户下次登录时该弹窗还是按照原有的频率来弹出。
    */
    //是否选中
    const is_check = ref(false)
    
    const change_value = ()=>{
        if ( is_check.value ) {  //打钩
            // addObj()
            console.log('勾选')
        } else {  //取消
            // removeObj()
            console.log('取消勾选')
        }
    }

    const addObj = ()=> {
        console.log(111111111)
        const d = new Date()
        let oldDay = d.getDate()
        const obj = {
            oldDay
        }

        const a = JSON.stringify(obj)

        localStorage.setItem( 'obj', a )
        window.location.reload()
        // if ( !localStorage.getItem( 'obj' ) ) {
        //     localStorage.setItem( 'obj', a )
        //     window.location.reload()
        // }
    }
    const removeObj = ()=> {
        if ( localStorage.getItem( 'obj' ) ) {
            localStorage.removeItem( 'obj' )
            window.location.reload()
        }
    }
    
</script>
    
<style scoped lang='css'>
    .container {
        width: 300px;
        height: 300px;
        background: red;
    }
</style>
