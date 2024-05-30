import { createApp } from 'vue'
import Pop_up from './pop_up.vue'

export function pop_up<T>( title:T, content:T, time:number = 2000, status:string ):void{
    if ( pop_up.__timer ) {
        clearTimeout(pop_up.__timer)
    }

    const app = createApp(Pop_up, { title, content })

    // app.mount(document.body)
    app.mount('#message')

    pop_up.__timer = setTimeout(() => {
        app.unmount()
    }, time);

}

pop_up.__timer = 0