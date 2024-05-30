import { provide, inject, ref } from 'vue'


/**
 * 控制打开弹窗
 * @param modelName 相对应的弹窗组件名
 * @returns openAction 打开弹窗方法
 */
export function openModal(modelName:string) {
    const state = ref<boolean>(false)
    provide(modelName, state);
    /**
     * 打开弹窗
     * @param state 弹窗的状态：显示、隐藏
     */
    function openAction() {
        state.value = true;
    }
    return  { openAction } 
}

/**
 * 控制关闭弹窗
 * @param modelName 相对应的弹窗组件名
 * @returns 
 */
export function closeModal(modelName:string) {
    // 控制弹窗 flag
    const show = inject(modelName, ref<boolean>(false))
    /**
     * 取消弹窗
     */
    function cancel() {
        console.log('cancel被调用了')
        show.value = false
    }
    /**
     * 带有回调函数关闭弹窗
     * @param callback 
     */
    function handleOk(e:MouseEvent) {
        console.log(e)
        cancel();
    }
    return { cancel, handleOk }
}

