<template>
    <div class="container">
        <h1>{{ props.title }}</h1>
        <p>{{ props.content }}</p>
        <p>
            <input id="xuanzhong" type="checkbox" v-model="is_check" @change="change_value">
        </p>
        <p>
            <button @click="confirm_click">{{ props.confirm_text }}</button>
            <button @click="cancel_click">{{ props.cancel_text }}</button>
        </p>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    import { close_box_everyday_box } from '../function_box'
    
    

    const { cancle_everyday_box, confirm_everyday_box } = close_box_everyday_box()

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
        confirm_everyday_box()
    }
    const cancel_click = ()=> {
        cancle_everyday_box()
    }

    /* 
        这里再写一个逻辑，就是判断is_check还有is_login，如果都为true今天就不能再弹窗了。
        当过了凌晨12点整，这个is_check又改为false，用户下次登录时该弹窗还是按照原有的频率来弹出。
    */
    const is_check = ref(false);
    const start_time =new Date(new Date(new Date().toLocaleDateString()).getTime());
    // start_time.test(/00:00:00/)
    let patt = /00:00.000/g;
    let str = JSON.stringify(start_time);
    let a = patt.test(str)

    if ( a ) {
        localStorage.removeItem('is_check')
    }

    const change_value = ()=>{
        console.log(1111111)
        if ( is_check.value ) {
            localStorage.setItem( 'is_check', '已经勾选过了' )
        }
    }


</script>
    
<style scoped lang='css'>
    .container {
        width: 500px;
        height: 500px;
        background: red;
    }
</style>
