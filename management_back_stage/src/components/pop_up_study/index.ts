import { createApp } from 'vue'
import Pop_up from './pop_up.vue'

export function pop_up<T>( title: string, content: string, time?: number, status?: string ): void {  //参数time最好不要给默认值，否则没法设置可选
    let __timer: number;
    
    const app = createApp(Pop_up, { title, content })

    // app.mount(document.body)
    app.mount('#message')

    __timer = window.setTimeout(() => {  //定时器有时候要在window对象点出来，否则容易报错：不能将类型“Timeout”分配给类型“number”。
        app.unmount()
    }, time);
    
    if ( __timer==0 ) {  //清除定时器，防止内存泄露
        clearTimeout(__timer)
    }
}
