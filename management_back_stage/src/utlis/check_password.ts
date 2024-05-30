import { ref } from 'vue'

//验证表单密码password的方法
export const password_validate = ( x:any ) =>{
    //表单各字段提示内容
    const password_tips = ref<string>('')
    let is_password_pass = ref<boolean>(false)
        const is_ok0 = x ? true : false ;
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
        case is_ok0:
            password_tips.value = '密码不能为空';
            break;
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
            is_password_pass.value = true;
    }
    return { password_tips, is_password_pass }
}