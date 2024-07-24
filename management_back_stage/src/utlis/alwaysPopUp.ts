import { ref, getCurrentInstance, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
// import { useTanchuangStore } from '@/stores/tanchuang'
import { useUserStore } from '@/stores/users'
import { everyday_box, close_box_everyday_box } from '@/components/function_box/index.ts'  //注意，解构出来的变量不能和当前已有的变量同名。


const store = useUserStore()
const { saveLocalStorageObj } = storeToRefs(store)
//需要页面刷新才能实现
export const popUp = ()=> {
    let _timer: any

    //写个方法，用来对比勾选的日期和今天的日期
    const campareDate = ()=> {
        const d = new Date()
        let currentDay = d.getDate()
        console.log(currentDay)
        let obj: any = localStorage.getItem( 'obj' )
        if ( obj ) {
            obj = JSON.parse( obj )
            console.log( obj )
            if ( obj.oldDay === currentDay ) {
                //还是同一天
                console.log('还是同一天', obj.oldDay, currentDay)
                return false;
                clearInterval(_timer)
                _timer = null;
            } else {
                everyday_box(
                    '每日弹窗',
                    '每天每次用户登陆的时候都要按一定时间弹窗一次，除非他勾选了',
                    '确认',
                    '取消'
                )
            }
        }
    }
    
    //弹窗
    const showAlert = ()=> {
        if ( saveLocalStorageObj.value ) {  //如果用户已勾选
            console.log('1111111111111用已勾选', saveLocalStorageObj.value)
            // clearInterval(_timer)
            campareDate()
        } else {  //如果没勾选
            console.log('1111111111111用户没勾选')
            // alert('你好世界')
            everyday_box(
                '每日弹窗',
                '每天每次用户登陆的时候都要按一定时间弹窗一次，除非他勾选了',
                '确认',
                '取消'
            )
        }
    }

    _timer = setInterval( showAlert, 5000)

    // onMounted( ()=>{
    //     let instance = getCurrentInstance()
    //     console.log(instance)
    // } )
}


