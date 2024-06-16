import { createApp } from 'vue'
import Pop_up from './pop_up.vue'

export function pop_up<T>( title:T, content:T, time?:number, status?:string ):void{  //参数time最好不要给默认值，否则没法设置可选
    if ( pop_up.__timer ) {
        clearTimeout(pop_up.__timer)
    }

    const app = createApp(Pop_up, { title, content })

    // app.mount(document.body)
    app.mount('#message')

    let __timer: number;
    __timer = window.setTimeout(() => {
        app.unmount()
    }, time);
    Object.assign( pop_up, { __timer } )
    pop_up.__timer
}

pop_up.__timer = 0