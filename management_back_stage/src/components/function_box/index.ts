import { createApp, defineAsyncComponent } from 'vue'
import Message from './message.vue'
import Form_box from './form_box.vue'
import Loading_box from './loading_box.vue'
import Everyday_box from './everyday_box.vue'
import router from '@/router'  //引入向外暴露的router对象

 /* 
    之所以要声明这些全局变量是为了方便关闭对应的弹窗
 */
let vm_1:any
let vm_2:any
let vm_3:any
let vm_4:any


/* 
    调用弹窗---一个简单的确认/取消弹窗
    调用的时候要传弹窗标题、弹窗内容、确认按钮文本、取消按钮文本这4个参数
*/
export function message( title:string, content?:string, confirm_text?:string, cancel_text?:string ) {
    vm_1 = createApp( Message, { title, content, confirm_text, cancel_text } )
    vm_1.mount( '#message' )
}

/* 
    调用弹窗--一个form表单弹窗
    调用的时候要传弹窗标题、提交按钮文本，内容是可选的
*/
export function form_box( title:string, submit_text:string ) {
    vm_2 = createApp( Form_box, { title, submit_text } )
    /* 
        这里还要挂载一下路由，否则会报错：
        [Vue warn]: injection "Symbol(router)" not found.
    */
    vm_2.use(router)
    vm_2.mount( '#form_box' )
    
}

/* 
    调用弹窗---loading弹窗
    调用的时候要传弹窗标题、图片路径2个参数
*/
export function loading_box( title:string, img_src?:string ) {
    vm_3 = createApp( Loading_box, { title, img_src } )
    vm_3.mount( '#loading_box' )
}

/* 
    调用弹窗---每天定时多次弹窗
    调用的时候要传弹窗标题、弹窗内容、确认按钮文本、取消按钮文本这4个参数
*/
export function everyday_box( title:string, content?:string, confirm_text?:string, cancel_text?:string ) {
    console.log(confirm_text,cancel_text)
    vm_4 = createApp( Everyday_box, { title, content, confirm_text, cancel_text } )
    vm_4.mount( '#everyday_box' )
    
}


//关闭---关闭确认/取消提示弹窗---用vue3里边卸载组件的方式
export function close_box_message() {
    function cancle_box_message() {
        vm_1.unmount()
    }
    function confirm_box_message() {
        vm_1.unmount()
    }
    return { cancle_box_message, confirm_box_message }
}

//关闭---关闭表单弹窗---用vue3里边卸载组件的方式
export function close_box_form_box() {
    function cancle_form_box() {
        vm_2.unmount()
    }
    function confirm_form_box() {
        vm_2.unmount()
    }
    return { cancle_form_box, confirm_form_box }
}

//关闭---关闭loading弹窗---用vue3里边卸载组件的方式
export function close_box_loading_box() {
    function cancle_loading_box() {
        vm_3.unmount()
    }
    function confirm_loading_box() {
        vm_3.unmount()
    }
    return { cancle_loading_box, confirm_loading_box }
}

//关闭---关闭everyday_box弹窗---用vue3里边卸载组件的方式
export function close_box_everyday_box() {
    function cancle_everyday_box() {
        vm_4.unmount()
    }
    function confirm_everyday_box() {
        vm_4.unmount()
    }
    return { cancle_everyday_box, confirm_everyday_box }
}