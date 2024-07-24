import { defineStore } from "pinia";
import { ref } from 'vue'

export const useTanchuangStore = defineStore('tanchuangId', ()=> {
    const xxx:any = ref(false)
    

    return { xxx }
})