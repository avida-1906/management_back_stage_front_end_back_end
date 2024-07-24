import { createI18n } from "vue-i18n";
import zh from './zh'
import en from './en'
import vantZhCN from 'vant/lib/locale/lang/zh-CN';//vant组件库的国际化中文
import vantEnUS from 'vant/lib/locale/lang/en-US';//vant组件库的国际化英文

const i18n: any = createI18n({
    locale: localStorage.getItem('lang')  || 'zh',
    legacy: false,
    globalInjection: true,
    messages: {
        zh: {
            ...zh,
            ...vantZhCN
        },
        en: {
            ...en,
            ...vantEnUS
        }
    }
})

export { i18n };