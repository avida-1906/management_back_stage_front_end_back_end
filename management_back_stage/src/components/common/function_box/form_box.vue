<template>
    <div class="form_box">
        <form @submit.prevent="submit_form" style="min-height:200px;">
            <p>标题</p>

            <p class="form_input">用户名：<input type="text" v-model.trim="form_value.username"></p>
            <p class="tips"><span class="tips_span_username">{{ username_tips }}</span></p>

            <p class="form_input">
                密码：<input :type="password_visible?'text':'password'" v-model.trim="form_value.password">
                <div class="change_visible" @click="password_visible=!password_visible">
                    <svg v-if="!password_visible" t="1716273580659" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="100%"><path d="M512 217.7792c258.0992 0 410.752 223.0784 453.504 295.5008C922.88 585.344 770.9696 806.2464 512 806.2464c-291.5072 0-420.9152-220.8-454.8352-291.4304C99.1488 444.9024 255.2832 217.7792 512 217.7792M512 166.5792c-338.3296 0-512 345.3696-512 345.3696s131.072 345.4976 512 345.4976c344.9856 0 512-344.1408 512-344.1408S855.6544 166.5792 512 166.5792L512 166.5792zM512.0256 396.1856c67.0208 0 115.6864 48.6912 115.6864 115.8144 0 67.1744-48.64 115.8656-115.6864 115.8656-67.0464 0-115.7376-48.6912-115.7376-115.8656C396.288 444.8768 444.9792 396.1856 512.0256 396.1856M512.0256 344.9856c-96.896 0-166.9376 73.0624-166.9376 167.0144 0 94.0032 70.016 167.0656 166.9376 167.0656 96.8704 0 166.8864-73.0624 166.8864-167.0656C678.912 418.0224 608.896 344.9856 512.0256 344.9856L512.0256 344.9856z" fill="#272636" p-id="2475"></path></svg>
                    <svg v-else t="1716274296487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3600" width="100%"><path d="M1003.6736 482.4064c-40.192-84.6336-88.0128-153.6512-143.4624-207.104l-58.112 58.1632c47.4112 45.312 88.7296 104.6016 124.416 178.432-95.0784 196.8128-230.0416 290.304-414.5152 290.304-55.3472 0-106.3424-8.5504-152.9856-25.6l-62.976 62.976c64.7168 29.952 136.704 44.9024 215.9616 44.9024 219.648 0 383.5392-114.432 491.6736-343.1936a68.864 68.864 0 0 0 0-58.88z m-72.704-366.4384l-48.64-48.7936a9.1648 9.1648 0 0 0-12.9536 0l-125.0304 124.928c-68.9152-35.1744-146.3296-52.736-232.3456-52.736-219.648 0-383.488 114.3808-491.6736 343.1424a68.9152 68.9152 0 0 0 0 58.88c43.2128 90.9824 95.232 163.84 156.0064 218.7264l-120.9344 120.9344a9.1648 9.1648 0 0 0 0 12.9024l48.7936 48.7936a9.1648 9.1648 0 0 0 12.9536 0L931.0208 128.9216a9.1648 9.1648 0 0 0 0-12.9536zM97.536 511.8976C192.7168 315.0848 327.68 221.5936 512 221.5936c62.3104 0 119.04 10.752 170.4448 32.4608l-80.384 80.384a201.1648 201.1648 0 0 0-272.128 272.128l-95.3344 95.3344c-52.736-46.592-98.2528-109.6704-137.1136-190.0032z m281.9584 0a128.1536 128.1536 0 0 1 167.0656-121.9072L385.536 550.912a128 128 0 0 1-6.0416-39.0656z" fill="#303133" p-id="3601"></path><path d="M507.4432 640.0512c-3.9424 0-7.8336-0.1536-11.7248-0.512L435.3536 699.904a201.216 201.216 0 0 0 259.9424-259.8912L634.88 500.3776a128.4096 128.4096 0 0 1-36.864 102.2464 128 128 0 0 1-90.5728 37.4272z" fill="#303133" p-id="3602"></path></svg>
                </div>
            </p>
            <p class="tips"><span class="tips_span_password">{{ password_tips }}</span></p>
            
            <p><button>{{ props.submit_text }}</button></p>
        </form>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, reactive, watch } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios';
    import { close_box_message } from './index'
    

    const router = useRouter()
    const { confirm_box_message } = close_box_message()

    const props = defineProps({
        title: { type: String, required: true },
        submit_text: { type: String, required: true },
    })

    const password_visible = ref(false)

    interface form_value {
        username: string
        password: string
    }
    const form_value:form_value = reactive({
        username: '',
        password: ''
    })
    // console.log(form_value.username)

    const username_tips = ref<string>('')
    const password_tips = ref<string>('')


    /* 
        vue3里边的watch监听对象的话，
        对象必须用reactive（这样watch默认设置了{deep:true}）来定义，
        直接把该对象作为第一个实参传给watch，
        然后watch的第二个实参是个箭头函数，
        该函数的第一个形参就是更新后的对象值。
    */
    watch(
        form_value,
        (x)=>{
            // console.log(x)
            // console.log('监听成功')
            form_validate(x)
        },
        { deep: true }, 
    )
    
    const form_validate = (x:any) =>{
        if ( x.username ) {
            username_validate( x.username )
        } else {
            username_tips.value = ''  //当输入框为空的时候不能出现提示文本
        }
        if ( x.password ) {
            password_validate( x.password )
        } else {
            password_tips.value = ''  //当输入框为空的时候不能出现提示文本
            // console.log('密码为空')
        }
    }

    //验证表单用户名username的方法
    const username_validate = ( x:any ) =>{
        //用户名不能出现空格
        const patt1 = new RegExp(/^\S+$/)
        const is_ok1 = patt1.test(x)
        //用户名要有特殊字符
        const patt2 = new RegExp(/[^\w\s]+/)
        const is_ok2 = patt2.test(x)
        //用户名要有数字
        const patt3 = new RegExp(/\d+/)
        const is_ok3 = patt3.test(x)
        //用户名要有小写字母
        const patt4 = new RegExp(/[a-z]+/)
        const is_ok4 = patt4.test(x)
        //用户名要有大写字母
        const patt5 = new RegExp(/[A-Z]+/)
        const is_ok5 = patt5.test(x)
        //用户名不超过16位
        const patt6 = new RegExp(/^.{4,16}$/)
        const is_ok6 = patt6.test(x)
        
        switch ( false ) {
            case is_ok1:
                username_tips.value = '用户名不能出现空格';
                break;
            case is_ok2:
                username_tips.value = '用户名要有特殊字符';
                break;
            case is_ok3:
                username_tips.value = '用户名要有数字';
                break;
            case is_ok4:
                username_tips.value = '用户名要有小写字母';
                break;
            case is_ok5:
                username_tips.value = '用户名要有大写字母';
                break;
            case is_ok6:
                username_tips.value = '用户名不超过16位';
            break;
            default:
                username_tips.value = '';
        }
    }
    //验证表单密码password的方法
    const password_validate = ( x:any ) =>{
        // console.log('密码为空')
        //密码要有特殊字符
        const patt1 = new RegExp(/[^\w\s]+/)
        const is_ok1 = patt1.test(x)
        //密码不能出现空格
        const patt2 = new RegExp(/^\S+$/)
        const is_ok2 = patt2.test(x)
        //密码要有数字
        const patt3 = new RegExp(/\d+/)
        const is_ok3 = patt3.test(x)
        //密码要有小写字母
        const patt4 = new RegExp(/[a-z]+/)
        const is_ok4 = patt4.test(x)
        //密码要有大写字母
        const patt5 = new RegExp(/[A-Z]+/)
        const is_ok5 = patt5.test(x)
        //密码不超过8位 
        const patt6 = new RegExp(/^.{8}$/)
        const is_ok6 = patt6.test(x)
        
        switch ( false ) {
            case is_ok1:
                password_tips.value = '密码要有特殊字符';
                break;
            case is_ok2:
                password_tips.value = '密码不能出现空格';
                break;
            case is_ok3:
                password_tips.value = '密码要有数字';
                break;
            case is_ok4:
                password_tips.value = '密码要有小写字母';
                break;
            case is_ok5:
                password_tips.value = '密码要有大写字母';
                break;
            case is_ok6:
                password_tips.value = '密码必须是8位数';
            break;
            default:
                password_tips.value = '';
        }
    }
    //提交表单，调接口
    const submit_form = () =>{
        form_validate( form_value )
        // axios.post('http://localhost:3000/users', { id:2, name: '李四', age: 11 }).then((value)=>{
        //     const { statusText, data } = value
        //     console.log(data, statusText)
        // }).finally(()=>{
        //     confirm_box_message()
        // })
        
    }
</script>
    
<style scoped lang='css'>
    * { margin:0; padding:0 }
    .form_box {
        width: 300px;
        border: 1px solid red;
        position: absolute;
        top: 20%;
        background: gray;
        padding: 2% 2%;
    }
    .form_box .form_input {
        text-align: right;
        margin:0 ;
    }
    .form_box .form_input .change_visible {
        width:5%;
        position:absolute;
        top:49%;
        right:9%;
        cursor:pointer;
    }
    .form_box .tips {
        min-height:20px;
        text-align:center;
        font-size:12px;
        color:#d1242f;
        margin:0 0;
    }
    .form_box .tips_span_username {
        margin-left:-8%;
    }
    .form_box .tips_span_password {
        margin-left:-11%;
    }
    .form_box .form_input input {
        width: 70%;
    }
    .form_box p:nth-child(1) {
        margin: 0 0 10% 0;
        background: #1677ff;
    }
    .form_box p:nth-last-child(1) {
        margin: 10% 0 0 0;
    }
    .form_box p:nth-last-child(1) button {
        padding: 3% 5%;
    }
</style>
