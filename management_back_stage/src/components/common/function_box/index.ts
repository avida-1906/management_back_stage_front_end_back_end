import { createApp } from 'vue'
import Message from './message.vue'
import Form_box from './form_box.vue'

 /* 
    这是个全局变量，用于关闭窗口使用
 */
let vm_1:any
let vm_2:any


//调用弹窗--一个简单的确认/取消弹窗
export function message( title:string, content:string, confirm_text:string, cancel_text:string ) {
    vm_1 = createApp( Message, { title, content, confirm_text, cancel_text } )
    // vm_1 = app
    vm_1.mount( '#message' )
    
}

//调用弹窗--一个form表单弹窗
export function form_box( title:string, content:string, submit_text:string, cancle_text:string ) {
    vm_2 = createApp( Form_box, { title, content, submit_text, cancle_text } )
    // vm_2 = app
    vm_2.mount( '#form_box' )
    
}




//关闭
export function close_box_message() {
    function cancle_box_message() {
        vm_1.unmount()
    }
    function confirm_box_message() {
        vm_1.unmount()
    }
    return { cancle_box_message, confirm_box_message }
}
//关闭
export function close_box_form_box() {
    function cancle_form_box() {
        vm_2.unmount()
    }
    function confirm_form_box() {
        vm_2.unmount()
    }
    return { cancle_form_box, confirm_form_box }
}