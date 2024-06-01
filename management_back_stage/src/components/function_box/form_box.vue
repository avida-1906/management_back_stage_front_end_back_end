<template>
    <div class="form_box">
        <form @submit.prevent="submit_form" style="min-height:200px;">
            <p>{{ props.title }}</p>

            <p class="form_input">用户名：<input type="text" v-model.trim="form_value.username"></p>
            <p class="tips"><span class="tips_span_username">{{ form_username_tips }}</span></p>

            <p class="form_input">
                密码：<input :type="password_visible?'text':'password'" v-model.trim="form_value.password">
                <div class="change_visible" @click="password_visible=!password_visible">
                    <svg v-if="!password_visible" t="1716273580659" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474" width="100%"><path d="M512 217.7792c258.0992 0 410.752 223.0784 453.504 295.5008C922.88 585.344 770.9696 806.2464 512 806.2464c-291.5072 0-420.9152-220.8-454.8352-291.4304C99.1488 444.9024 255.2832 217.7792 512 217.7792M512 166.5792c-338.3296 0-512 345.3696-512 345.3696s131.072 345.4976 512 345.4976c344.9856 0 512-344.1408 512-344.1408S855.6544 166.5792 512 166.5792L512 166.5792zM512.0256 396.1856c67.0208 0 115.6864 48.6912 115.6864 115.8144 0 67.1744-48.64 115.8656-115.6864 115.8656-67.0464 0-115.7376-48.6912-115.7376-115.8656C396.288 444.8768 444.9792 396.1856 512.0256 396.1856M512.0256 344.9856c-96.896 0-166.9376 73.0624-166.9376 167.0144 0 94.0032 70.016 167.0656 166.9376 167.0656 96.8704 0 166.8864-73.0624 166.8864-167.0656C678.912 418.0224 608.896 344.9856 512.0256 344.9856L512.0256 344.9856z" fill="#272636" p-id="2475"></path></svg>
                    <svg v-else t="1716274296487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3600" width="100%"><path d="M1003.6736 482.4064c-40.192-84.6336-88.0128-153.6512-143.4624-207.104l-58.112 58.1632c47.4112 45.312 88.7296 104.6016 124.416 178.432-95.0784 196.8128-230.0416 290.304-414.5152 290.304-55.3472 0-106.3424-8.5504-152.9856-25.6l-62.976 62.976c64.7168 29.952 136.704 44.9024 215.9616 44.9024 219.648 0 383.5392-114.432 491.6736-343.1936a68.864 68.864 0 0 0 0-58.88z m-72.704-366.4384l-48.64-48.7936a9.1648 9.1648 0 0 0-12.9536 0l-125.0304 124.928c-68.9152-35.1744-146.3296-52.736-232.3456-52.736-219.648 0-383.488 114.3808-491.6736 343.1424a68.9152 68.9152 0 0 0 0 58.88c43.2128 90.9824 95.232 163.84 156.0064 218.7264l-120.9344 120.9344a9.1648 9.1648 0 0 0 0 12.9024l48.7936 48.7936a9.1648 9.1648 0 0 0 12.9536 0L931.0208 128.9216a9.1648 9.1648 0 0 0 0-12.9536zM97.536 511.8976C192.7168 315.0848 327.68 221.5936 512 221.5936c62.3104 0 119.04 10.752 170.4448 32.4608l-80.384 80.384a201.1648 201.1648 0 0 0-272.128 272.128l-95.3344 95.3344c-52.736-46.592-98.2528-109.6704-137.1136-190.0032z m281.9584 0a128.1536 128.1536 0 0 1 167.0656-121.9072L385.536 550.912a128 128 0 0 1-6.0416-39.0656z" fill="#303133" p-id="3601"></path><path d="M507.4432 640.0512c-3.9424 0-7.8336-0.1536-11.7248-0.512L435.3536 699.904a201.216 201.216 0 0 0 259.9424-259.8912L634.88 500.3776a128.4096 128.4096 0 0 1-36.864 102.2464 128 128 0 0 1-90.5728 37.4272z" fill="#303133" p-id="3602"></path></svg>
                </div>
            </p>
            <p class="tips"><span class="tips_span_password">{{ form_password_tips }}</span></p>

            <p><button>{{ props.submit_text }}</button></p>
        </form>
    </div>
</template>
    
<script setup lang='ts'>
    import { ref, defineProps, reactive, watch, computed } from 'vue'
    import axios from 'axios';
    import { login_get_api } from '@/api/request.ts'
    import { loading_box, close_box_loading_box, close_box_form_box } from './index'
    import { message } from './index.ts' //确认/取消提示框
    import { username_validate } from '@/utlis/check_username'
    import { password_validate } from '@/utlis/check_password'

    const { confirm_form_box } = close_box_form_box()  //关闭表单弹窗
    const { confirm_loading_box } = close_box_loading_box()  //关闭loading弹窗

    const props = defineProps({
        title: { type: String, required: true },
        submit_text: { type: String, required: true },
    })

    //控制密码输入框icon切换的变量
    const password_visible = ref<boolean>(false)

    //定义一个对象用来清空form_value对象
    // const initialFormData = {
    //     username: '',
    //     password: ''
    // };

    //对象接口
    interface form_value {
        username: string
        password: string
    }

    //收集表单数据，用于提交表单发请求
    const form_value:form_value = reactive({
        username: '',
        password: ''
    })
    // const form_value:form_value = reactive({...initialFormData})

    //表单各字段提示内容
    const form_username_tips = ref<string>('')
    const form_password_tips = ref<string>('')
    
    //验证表单各字段格式是否满足要求的状态变量
    const is_validate_form_pass = ref<boolean>(false)

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
            form_validate(x)
        },
        // { deep: true },
    )
    
    /* 
        computed要么传箭头函数要么传对象，
        需要修改值的话就是传对象
        传对象的时候就是用到set()和get()，
        传箭头函数就是纯粹就是监听一个值。
    */
    // const x = computed(()=>{
    //     return form_value.username ? '有名字' : '没有名字'
    // })
    // const x = computed({
    //     get() {
    //         return form_value
    //     },
    //     set(newValue) {
    //         console.log(newValue)
    //     }
    // })


    //该方法用来给整个表单验证
    const form_validate = (x:any) =>{
        let a:any;
        let b:any;
        a = username_validate(x.username)
        b = password_validate(x.password)

        //分别把两个函数返回的两个变量解构出来，变量名要一样
        let { username_tips, is_username_pass } = a
        let { password_tips, is_password_pass } = b

        //因为解构出来的变量名跟当前组件的公共变量名有冲突，所以当前组件的变量名要改一下，这样才能在template里边使用
        form_username_tips.value = username_tips.value
        form_password_tips.value = password_tips.value

        //这里给表单做最后的判断，行就调接口，不行就不调接口
        if ( is_username_pass.value === true && is_password_pass.value === true ) {
            is_validate_form_pass.value = true;
        } else {
            is_validate_form_pass.value = false;
        }
    }

    //提交表单，调接口
    const submit_form = async () =>{
        
        const url = ref<string>()

        form_validate( form_value )  //校验表单，通过了就给is_validate_form_pass变量赋值为true

        if ( !is_validate_form_pass.value ) { //如果表单任意一个字段验证不通过则不关闭弹窗且不调接口
            return false;
        }
        loading_box(  //loading弹窗
            '正在登录......',
            '@/assets/img/loader.gif'
        )

        url.value = `http://localhost:8081/?username=${form_value.username}&userpassword=${form_value.password}`

        try {
            const res = await login_get_api( url )
            const { data, statusText } = res
            console.log(data)
            if ( data.message === '用户名或密码错误！！！' ) {  //如果登陆失败就不关闭表单弹窗
                message(  //如果登陆失败就弹提示框
                    '提示',
                    '用户名或密码错误',
                    '确认',
                    '取消'
                )
                return false;

            } else {  //如果登陆成功就关闭表单弹窗
                //登陆成功了要把用户名密码存到loaclStorage里边
                // console.log(localStorage)
                //localStorage里边的value只能存JSON字符串
                localStorage.setItem( 'userInfo', JSON.stringify(form_value) )
                // console.log(localStorage.getItem('userInfo'))
                reset_form( form_value )  //清空各个字段
                confirm_form_box()
            }
        } catch(e) {
            console.log(e, 'catch(e)')
            confirm_loading_box()  //无论如何loading弹窗最终会关闭
        } finally {
            confirm_loading_box() //无论如何loading弹窗最终会关闭
        }
    }

    /* 
        定义一个方法，用于登陆成功之后清除表单各个字段的数据
        这里我要总结一下，今天我优化代码的时候谷歌浏览器弹窗问我是否保存账号密码，
        我手快点击了保存，结果每次弹出表单这个窗口的时候都会自动填充账号密码，
        这就导致我无论如何清空表单的数据都没有效果，尝试了各种办法都没法清空form_value这个对象里各个字段的数据。
        我还以为是我代码出问题了，排查了很久，后来我手动把浏览器保存的账号密码删掉之后就好了。
    */
    const reset_form = ( y:form_value ) =>{
        y.username = '';
        y.password = '';
        // const keys = Object.keys(y) as Array<keyof typeof y>;
        // keys.forEach((key) => {
        //     y[key] = initialFormData[key]
        //     console.log(key);
        // });

        // const obj = {
        //     username: '',
        //     password: ''
        // }
        // const x = Object.assign(y, obj)
        // y.username = '';
        // y.password = '';
        // console.log( y )
        // return y
    }

</script>
    
<style scoped lang='css'>
    * { margin:0; padding:0 }
    .form_box {
        border: 1px solid red;
        padding: 2% 2%;
        background: gray;
    }
    .form_box .form_input {
        text-align: right;
    }
    .form_box .form_input .change_visible {
        width:5%;
        /* float: right; */
        position:absolute;
        bottom:42%;
        right:3%;
        cursor:pointer;
    }
    .form_box .tips {
        min-height:20px;
        text-align:left;
        font-size:12px;
        color:#d1242f;
        margin:0 0;
    }
    .form_box .tips_span_username {
        margin-left:29%;
    }
    .form_box .tips_span_password {
        margin-left:29%;
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
