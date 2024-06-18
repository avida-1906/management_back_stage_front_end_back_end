<template>
    <!-- <input type="text" v-model="message"> -->
     <!-- 
        v-model的双向绑定原理很简单。
        就是给输入框动态绑定它的属性value到值message，还有绑定一个input事件到change_value，
        这个input事件的形参e里边的target的value属性可以拿到输入框的值，
        再把值赋值给当前组件的变量message。
     -->
     <input type="text" v-bind:value="message" v-on:input="change_value">
    <p>{{ message }}</p>
</template>
    
<script setup lang='ts'>
    import { ref } from 'vue'
    
    const message = ref('你好111')

    const change_value = ( e:any )=> {
        message.value = e.target.value;
    }

</script>
    
<style scoped lang='css'>
    
</style>

