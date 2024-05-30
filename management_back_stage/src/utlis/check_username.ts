import { ref } from 'vue'

//验证表单用户名username的方法
export const username_validate = ( x:any ) =>{
    //表单各字段提示内容
    const username_tips = ref<string>('')
    let is_username_pass = ref<boolean>(false)
    const is_ok0 = x ? true : false ;
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
        case is_ok0:
            username_tips.value = '用户名不能为空';
            break;
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
            is_username_pass.value = true;
    }
    return { username_tips, is_username_pass }
}