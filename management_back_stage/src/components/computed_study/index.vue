<template>
  <div>
    <p>这个页面研究computed的相关知识</p>
    <p>{{ obj }}</p>
    <button @click="add_something">添加age属性或者+1</button>
  </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'
    
    //记住，一定要给对象定义接口，否则打包的时候容易报错：
    //Property 'age' does not exist on type '{ name: string; }'.
    interface person{
        name: string
        age?: number
    }
    const obj: person = reactive({
        name: '张三',
    })
  
    function add_something(){
        if( !obj.age ) {
            obj.age = 18
        } else {
            obj.age++
        }
        
    }
</script>

<style>

</style>